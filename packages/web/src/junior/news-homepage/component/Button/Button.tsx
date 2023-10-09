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
        "border-4 border-transparent transition-all duration-150 outline-none select-none cursor-pointer",
        "bg-[#ef4335]",
        "px-5 py-2",
        "uppercase tracking-[0.3em] text-xs font-bold text-white",
        isPressed && "scale-95 bg-slate-950",
        isFocusVisible && "border-4 border-slate-950",
        "hover:border-slate-950",
        className
      )}
    >
      {children}
    </button>
  );
};
