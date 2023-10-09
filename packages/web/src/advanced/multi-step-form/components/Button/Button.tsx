import { useRef } from "react";
import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing,
} from "react-aria";
import { twMerge } from "tailwind-merge";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";

export interface ButtonProps extends AriaButtonProps {
  variant: ButtonVariant;
  className?: string;
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
        "bg-sky-800 text-white rounded-md px-7 py-3 tracking-wider text-base",
        "hover:bg-sky-600",
        isPressed && "scale-95 bg-sky-600",
        isFocusVisible && "bg-sky-600",
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
        "text-gray-400 tracking-normal font-semibold text-base",
        "hover:text-sky-800",
        isPressed && "scale-95",
        isFocusVisible && "text-sky-800",
        "disabled:text-gray-300",
        base
      );
    case "link":
      return twMerge(
        "text-gray-400 tracking-tight decoration-2 decoration-solid underline decoration-gray-400 text-sm",
        "hover:text-violet-500 hover:decoration-violet-600",
        isPressed && "scale-95",
        isFocusVisible && "text-violet-500 decoration-violet-600",
        "disabled:text-gray-300 disabled:decoration-gray-300",
        base
      );
  }
};

export const Button = (props: ButtonProps) => {
  const ref = useRef(null);
  const { children, variant, isDisabled, className } = props;
  const { buttonProps, isPressed } = useButton(props, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  const buttonClasses = getClasses(
    variant,
    isPressed,
    isFocusVisible,
    isDisabled
  );

  return (
    <button
      {...mergeProps(focusProps, buttonProps)}
      className={twMerge(buttonClasses, className)}
    >
      {children}
    </button>
  );
};
