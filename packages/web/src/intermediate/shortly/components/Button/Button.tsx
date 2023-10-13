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
  size?: "small" | "large";
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
    case "large":
      sizeClasses = "py-3 px-10 rounded-full text-lg";
      break;
  }

  return (
    <button
      {...mergeProps(focusProps, buttonProps)}
      className={twMerge(
        "outline-none select-none cursor-pointer border-2 border-transparent",
        "bg-teal-500 text-white font-bold",
        "transition-all duration-200 ease-in-out hover:bg-teal-400",
        "disabled:bg-indigo-950",
        isFocusVisible && "border-indigo-950",
        isPressed && "scale-95 bg-teal-600",
        sizeClasses,
        className
      )}
    >
      {children}
    </button>
  );
};
