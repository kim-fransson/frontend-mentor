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
        "rounded-full p-2 text-lg font-bold text-gray-200 flex justify-center items-center cursor-pointer select-none focus:outline-none",
        isFocused && "bg-teal-500"
      )}
    >
      {item.rendered}
    </li>
  );
};
