import { useRef } from "react";
import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing,
} from "react-aria";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends AriaButtonProps {
  className?: string;
  size?: "small" | "medium" | "large";
}

export const Button = (props: ButtonProps) => {
  const ref = useRef(null);
  const { children, className, size = "small" } = props;
  const { isFocusVisible, focusProps } = useFocusRing();
  const { buttonProps, isPressed } = useButton(props, ref);

  let sizeClasses;
  switch (size) {
    case "small":
      sizeClasses = "py-1 px-8 text-lg rounded-md";
      break;
    case "medium":
      sizeClasses = "py-2 px-8 text-lg rounded-md";
      break;
    case "large":
      sizeClasses = "py-3 px-8 rounded-full text-lg";
      break;
  }

  return (
    <button
      {...mergeProps(focusProps, buttonProps)}
      className={twMerge(
        "outline-none select-none cursor-pointer font-poppins border-2 border-transparent",
        "bg-teal-400 text-white font-bold",
        "transition-all duration-200 ease-in-out hover:bg-teal-300",
        "disabled:bg-indigo-950",
        isFocusVisible && "border-indigo-950",
        isPressed && "scale-95 bg-teal-500",
        sizeClasses,
        className
      )}
    >
      {children}
    </button>
  );
};
