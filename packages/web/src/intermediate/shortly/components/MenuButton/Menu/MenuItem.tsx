import { useRef } from "react";
import { useMenuItem } from "react-aria";
import { Node, TreeState } from "react-stately";
import { twMerge } from "tailwind-merge";

interface MenuItemProps<T> {
  item: Node<T>;
  state: TreeState<T>;
  onAction: ((key: React.Key) => void) | undefined;
  onClose: (() => void) | undefined;
}

export const MenuItem = <T,>(props: MenuItemProps<T>) => {
  const { item, state, onAction, onClose } = props;
  const ref = useRef(null);
  const { menuItemProps, isFocused } = useMenuItem(
    {
      key: item.key,
      onAction,
      onClose,
    },
    state,
    ref
  );

  return (
    <li
      {...menuItemProps}
      ref={ref}
      className={twMerge(
        "text-lg transition-all duration-200 ease-in-out font-bold text-gray-200 flex justify-center items-center cursor-pointer select-none outline-none",
        item.key === "sign-up" && "bg-teal-500 rounded-full p-2",
        isFocused &&
          (item.key !== "sign-up"
            ? "text-teal-500 scale-105"
            : "bg-teal-400 scale-105")
      )}
    >
      {item.rendered}
    </li>
  );
};
