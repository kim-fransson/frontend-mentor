import { useRef } from "react";
import { AriaTextFieldProps, useTextField } from "react-aria";
import { twMerge } from "tailwind-merge";

interface TextFieldProps extends AriaTextFieldProps {}

export const TextField = (props: TextFieldProps) => {
  const inputRef = useRef(null);
  const { inputProps, errorMessageProps } = useTextField(props, inputRef);
  return (
    <div className="relative">
      <input
        {...inputProps}
        className={twMerge(
          "cursor-pointer rounded-md tracking-tight font-medium text-gray-600 border-2 border-gray-300 px-3 py-2 outline-none",
          "selection:bg-teal-100",
          "focus-visible:border-teal-500",
          "placeholder:text-gray-400 placeholder:font-medium placeholder:text-sm",
          props.isInvalid && "border-red-400 placeholder:text-red-300"
        )}
        ref={inputRef}
      />
      {props.errorMessage && (
        <span
          className="absolute block mt-1 font-medium italic text-xs text-red-400"
          {...errorMessageProps}
        >
          {props.errorMessage}
        </span>
      )}
    </div>
  );
};
