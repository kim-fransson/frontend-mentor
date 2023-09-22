import classNames from "classnames";
import { PropsWithChildren, useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";

interface ButtonProps extends AriaButtonProps, PropsWithChildren {
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const buttonRef = useRef(null);
  const { buttonProps } = useButton(props, buttonRef);
  return (
    <button
      {...buttonProps}
      ref={buttonRef}
      className={classNames(
        "text-center outline-none text-lg py-4 px-4 rounded-full bg-blue-950 text-gray-200 font-bold",
        props.className
      )}
    >
      {props.children}
    </button>
  );
};
