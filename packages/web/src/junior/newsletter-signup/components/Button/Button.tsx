import { PropsWithChildren, useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends AriaButtonProps, PropsWithChildren {
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const buttonRef = useRef(null);
  const { buttonProps, isPressed } = useButton(props, buttonRef);

  return (
    <button
      {...buttonProps}
      ref={buttonRef}
      className={twMerge(
        "text-sm text-center outline-none rounded-md text-white px-5 py-3 bg-slate-950 font-bold transition-all duration-300 ease-in-out",
        "hover:bg-tomato-700 hover:text-gray-100",
        isPressed && "bg-tomato-700 text-gray-100",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-950 disabled:text-gray-600",
        props.className
      )}
    >
      {props.children}
    </button>
  );
};
