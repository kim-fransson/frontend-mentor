import { useRef } from "react";
import { AriaMenuProps, useMenu } from "react-aria";
import { useTreeState } from "react-stately";
import { MenuSection } from "./MenuSection";
import { twMerge } from "tailwind-merge";

interface MenuProps<T extends object> extends AriaMenuProps<T> {
  onClose: () => void;
}

export const Menu = <T extends object>(props: MenuProps<T>) => {
  const state = useTreeState(props);
  const ref = useRef(null);
  const { menuProps } = useMenu(props, state, ref);

  return (
    <ul
      {...menuProps}
      ref={ref}
      className={twMerge(
        "min-w-[300px] sm:min-w-[350px] p-6 bg-jacarta-300 shadow-xs rounded-lg focus:outline-none"
      )}
    >
      {[...state.collection].map((item) => (
        <MenuSection
          key={item.key}
          section={item}
          state={state}
          onAction={props.onAction}
          onClose={props.onClose}
        />
      ))}
    </ul>
  );
};
