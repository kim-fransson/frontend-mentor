import { useRef } from "react";
import { AriaMenuProps, useMenu } from "react-aria";
import { useTreeState } from "react-stately";
import { MenuSection } from "./MenuSection";

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
      className="min-w-[350px] py-10 border-t border-gray-400 px-6 bg-jacarta-300 shadow-xs rounded-lg focus:outline-none"
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
