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
        "text-center outline-none rounded-md text-white px-12 py-3 bg-slate-950 font-bold transition-all duration-300 ease-in-out",
        "hover:bg-tomato-700 hover:text-gray-100 hover:scale-105",
        isPressed && "bg-tomato-700 text-gray-100 scale-105",
        props.className
      )}
    >
      {props.children}
    </button>
  );
};
