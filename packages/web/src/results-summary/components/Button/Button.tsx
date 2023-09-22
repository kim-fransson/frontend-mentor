import classNames from "classnames";
import { PropsWithChildren, useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";

interface ButtonProps extends AriaButtonProps, PropsWithChildren {}

export const Button = (props: ButtonProps) => {
  const buttonRef = useRef(null);
  const { buttonProps, isPressed } = useButton(props, buttonRef);
  return (
    <button
      {...buttonProps}
      ref={buttonRef}
      className={classNames(
        "text-center tracking-wider outline-none text-lg py-4 px-4 rounded-full text-gray-200 bg-blue-950 font-bold transition-all duration-300 ease-in-out",
        "hover:bg-indigo-600 hover:text-gray-100 hover:scale-105",
        isPressed && "bg-indigo-600 text-gray-100 scale-105"
      )}
    >
      {props.children}
    </button>
  );
};
