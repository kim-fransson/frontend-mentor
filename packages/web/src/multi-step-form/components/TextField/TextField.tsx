import { useRef } from "react";
import { AriaTextFieldProps, useTextField } from "react-aria";
import { twMerge } from "tailwind-merge";

interface TextFieldProps extends AriaTextFieldProps {}

export const TextField = (props: TextFieldProps) => {
  const inputRef = useRef(null);
  const { labelProps, inputProps, errorMessageProps } = useTextField(
    props,
    inputRef
  );
  return (
    <div className="relative inline-grid grid-cols-2 gap-y-[0.125rem]">
      <label
        className={twMerge(
          "text-xs tracking-tight font-medium cursor-pointer capitalize text-indigo-900",
          props.isInvalid && ""
        )}
        {...labelProps}
      >
        {props.label}
      </label>
      {props.errorMessage && (
        <span
          className="justify-self-end col-start-2 font-medium text-xs text-red-600"
          {...errorMessageProps}
        >
          {props.errorMessage}
        </span>
      )}
      <input
        {...inputProps}
        className={twMerge(
          "col-span-2 cursor-pointer rounded-lg font-medium text-gray-900 border border-gray-300 px-4 py-2 outline-none",
          "selection:bg-indigo-200",
          "focus-visible:border-indigo-700",
          "placeholder:text-gray-400 placeholder:font-medium placeholder:text-sm",
          props.isInvalid && "border-red-600"
        )}
        ref={inputRef}
      />
    </div>
  );
};
