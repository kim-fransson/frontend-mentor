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
}

export const Button = (props: ButtonProps) => {
  const ref = useRef(null);
  const { children, className } = props;
  const { buttonProps, isPressed } = useButton(props, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      {...mergeProps(focusProps, buttonProps)}
      className={twMerge(
        "transition-all duration-150 outline-none select-none cursor-pointer",
        "bg-red-500",
        "px-8 py-[0.75rem]",
        "uppercase tracking-[0.3em] text-base font-bold text-white",
        isPressed && "scale-95 bg-slate-950",
        isFocusVisible && "border-4 border-slate-950",
        className
      )}
    >
      {children}
    </button>
  );
};
