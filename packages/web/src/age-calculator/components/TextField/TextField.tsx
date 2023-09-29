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
    <div className="relative inline-grid grid-cols-1 gap-y-2">
      <label
        className={twMerge(
          "font-bold text-xs tracking-[0.2em] uppercase text-gray-500",
          props.isInvalid && "text-red-500"
        )}
        {...labelProps}
      >
        {props.label}
      </label>
      <input
        {...inputProps}
        className={twMerge(
          "border tracking-wide cursor-pointer outline-none border-gray-300 text-gray-800 rounded-md text-base md:text-2xl font-bold py-3 px-4",
          "selection:bg-violet-200",
          "focus-visible:border-violet-600",
          "placeholder:text-gray-400",
          props.isInvalid && "border-red-400"
        )}
        ref={inputRef}
      />
      {props.errorMessage && (
        <span
          className="absolute top-20 md:top-[5.5rem] text-red-400 italic text-xs tracking-tight"
          {...errorMessageProps}
        >
          {props.errorMessage}
        </span>
      )}
    </div>
  );
};
