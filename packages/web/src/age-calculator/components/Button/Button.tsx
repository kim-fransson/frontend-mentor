import { useRef } from "react";
import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing,
} from "react-aria";
import { twMerge } from "tailwind-merge";
import ArrowIcon from "../../../assets/svg/icon-arrow.svg?react";

interface ButtonProps extends AriaButtonProps {}

export const Button = (props: ButtonProps) => {
  const ref = useRef(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      {...mergeProps(focusProps, buttonProps)}
      className={twMerge(
        "rounded-full p-4 outline-none text-xs bg-violet-600 transition-all duration-200 ease-in-out",
        (isPressed || isFocusVisible) && "bg-gray-950"
      )}
    >
      <ArrowIcon className="h-6 w-6" />
    </button>
  );
};
