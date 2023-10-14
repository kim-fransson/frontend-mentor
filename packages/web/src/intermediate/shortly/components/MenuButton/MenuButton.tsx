import type { MenuTriggerProps } from "react-stately";
import { AriaMenuProps, useButton, useMenuTrigger } from "react-aria";
import { useMenuTriggerState } from "react-stately";
import { useRef } from "react";
import HamburgerMenu from "../../assets/icon-hamburger.svg?react";
import { Popover } from "../Popover/Popover";
import { Menu } from "./Menu/Menu";
import { useIsFirstRender } from "@uidotdev/usehooks";
import { twMerge } from "tailwind-merge";

interface MenuButtonProps<T extends object>
  extends AriaMenuProps<T>,
    MenuTriggerProps {
  className?: string;
}

export const MenuButton = <T extends object>(props: MenuButtonProps<T>) => {
  const state = useMenuTriggerState(props);
  // got some weird flickering bug for first render
  const isFirstRender = useIsFirstRender();

  const ref = useRef(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref);
  const { buttonProps } = useButton(menuTriggerProps, ref);

  return (
    <div className={twMerge("inline-block", props.className)}>
      <button
        {...buttonProps}
        ref={ref}
        className="cursor-pointer focus:outline-none"
      >
        <HamburgerMenu className="w-8 h-8 text-gray-500" />
      </button>
      {!isFirstRender && (
        <Popover
          state={state}
          triggerRef={ref}
          placement="bottom left"
          offset={20}
        >
          <Menu {...menuProps} {...props} onClose={() => state.close()} />
        </Popover>
      )}
    </div>
  );
};
