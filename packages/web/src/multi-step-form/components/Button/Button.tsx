import { useRef } from "react";
import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing,
} from "react-aria";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "ghost" | "link";

export interface ButtonProps extends AriaButtonProps {
  variant: ButtonVariant;
}

const getClasses = (
  variant: ButtonVariant,
  isPressed: boolean,
  isFocusVisible: boolean,
  isDisabled?: boolean
) => {
  const base =
    "transition-all duration-150 disabled:cursor-not-allowed outline-none select-none capitalize";
  switch (variant) {
    case "primary":
      return twMerge(
        "bg-blue-950 text-white rounded-md px-7 py-3 tracking-wider text-base",
        "hover:bg-blue-700",
        isPressed && "scale-95 bg-blue-700",
        isFocusVisible && "bg-blue-700",
        "disabled:bg-gray-500 disabled:text-gray-200",
        base
      );
    case "secondary":
      return twMerge(
        "bg-indigo-700 text-white rounded-md px-7 py-3 tracking-wider text-base",
        "hover:bg-violet-500",
        isPressed && "scale-95 bg-violet-500",
        isFocusVisible && "bg-violet-500",
        isDisabled && "disabled:bg-gray-500 disabled:text-gray-200",
        base
      );
    case "ghost":
      return twMerge(
        "text-gray-500 tracking-normal font-semibold text-base",
        "hover:text-blue-600",
        isPressed && "scale-95",
        isFocusVisible && "text-blue-600",
        "disabled:text-gray-300",
        base
      );
    case "link":
      return twMerge(
        "text-gray-500 tracking-tight decoration-solid underline text-sm font-semibold",
        "hover:text-violet-500",
        isPressed && "scale-95",
        isFocusVisible && "text-violet-500",
        "disabled:text-gray-300",
        base
      );
  }
};

export const Button = (props: ButtonProps) => {
  const ref = useRef(null);
  const { children, variant, isDisabled } = props;
  const { buttonProps, isPressed } = useButton(props, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  const buttonClasses = getClasses(
    variant,
    isPressed,
    isFocusVisible,
    isDisabled
  );

  return (
    <button {...mergeProps(focusProps, buttonProps)} className={buttonClasses}>
      {children}
    </button>
  );
};
