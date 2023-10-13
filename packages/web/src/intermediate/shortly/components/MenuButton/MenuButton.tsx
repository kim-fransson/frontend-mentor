import type { MenuTriggerProps } from "react-stately";
import { AriaMenuProps, useButton, useMenuTrigger } from "react-aria";
import { useMenuTriggerState } from "react-stately";
import { useRef } from "react";
import HamburgerMenu from "../../assets/icon-hamburger.svg?react";
import { Popover } from "../Popover/Popover";
import { Menu } from "./Menu/Menu";

interface MenuButtonProps<T extends object>
  extends AriaMenuProps<T>,
    MenuTriggerProps {}

export const MenuButton = <T extends object>(props: MenuButtonProps<T>) => {
  const state = useMenuTriggerState(props);

  const ref = useRef(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref);
  const { buttonProps } = useButton(menuTriggerProps, ref);

  console.log("rendered");

  return (
    <>
      <button
        {...buttonProps}
        ref={ref}
        className="cursor-pointer focus:outline-none"
      >
        <HamburgerMenu className="w-8 h-8 text-gray-500" />
      </button>
      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={ref}
          placement="bottom left"
          offset={20}
        >
          <Menu {...menuProps} {...props} onClose={() => state.close()} />
        </Popover>
      )}
    </>
  );
};
