import { useRef, useState } from "react";
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
  const [pressClasses, setPressClasses] = useState("");
  const ref = useRef(null);
  const { children, className, size = "small", onPress } = props;
  const { isFocusVisible, focusProps, isFocused } = useFocusRing();
  const { buttonProps } = useButton(
    {
      ...props,
      onPressStart: () => {
        setPressClasses(
          isFocused
            ? "scale-95 focus:bg-indigo-950"
            : "scale-95 focus:bg-teal-500"
        );
      },
      onPressEnd: () => setPressClasses("scale-100"),
      onFocusChange: (isFocused) =>
        setPressClasses(!isFocused ? "bg-teal-400" : ""),
      onPress: (e) => {
        onPress && onPress(e);
        setPressClasses("bg-indigo-950");
      },
    },
    ref
  );

  let sizeClasses;
  switch (size) {
    case "small":
      sizeClasses = "py-1 px-8 text-sm rounded-md";
      break;
    case "medium":
      sizeClasses = "py-2 px-8 rounded-md";
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
        "transition-all duration-200 ease-in-out hover:border-indigo-950",
        isFocusVisible && "border-indigo-950",
        sizeClasses,
        pressClasses,
        className
      )}
    >
      {children}
    </button>
  );
};
