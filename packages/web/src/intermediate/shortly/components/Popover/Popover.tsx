import { Transition } from "@headlessui/react";
import { useRef } from "react";
import { DismissButton, Overlay, usePopover } from "react-aria";
import type { AriaPopoverProps } from "react-aria";
import type { OverlayTriggerState } from "react-stately";
import { twMerge } from "tailwind-merge";

export interface PopoverProps extends Omit<AriaPopoverProps, "popoverRef"> {
  children: React.ReactNode;
  state: OverlayTriggerState;
  className?: string;
}

export const Popover = ({
  children,
  state,
  className,
  ...props
}: PopoverProps) => {
  const popoverRef = useRef(null);
  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef,
    },
    state
  );

  return (
    <Transition appear={state.isOpen} show={state.isOpen}>
      <Overlay>
        <div
          {...underlayProps}
          className={twMerge("fixed inset-0", className)}
        />
        <div {...popoverProps} ref={popoverRef}>
          <DismissButton onDismiss={state.close} />
          <Transition.Child
            enter="transform transition duration-300 ease-in-out"
            enterFrom="opacity-0 -translate-y-10"
            enterTo="opacity-100 translate-y-0"
            leave="transform duration-300 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100 "
            leaveTo="opacity-0 scale-95 "
          >
            {children}
          </Transition.Child>
          <DismissButton onDismiss={state.close} />
        </div>
      </Overlay>
    </Transition>
  );
};
