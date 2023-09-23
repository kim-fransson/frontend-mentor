import { useRef } from "react";
import { AriaTextFieldProps, useTextField } from "react-aria";
import { twMerge } from "tailwind-merge";

interface TextFieldProps extends AriaTextFieldProps {}

export const TextField = (props: TextFieldProps) => {
  const { label } = props;
  const ref = useRef(null);
  const { labelProps, inputProps, errorMessageProps } = useTextField(
    props,
    ref
  );

  return (
    <div className="inline-grid grid-cols-2 gap-y-1 flex-col">
      <label
        className="text-xs tracking-tight text-gray-800 font-semibold"
        {...labelProps}
      >
        {label}
      </label>
      {props.errorMessage && (
        <span
          {...errorMessageProps}
          className="text-xs text-right tracking-tight font-semibold text-red-500"
        >
          {props.errorMessage}
        </span>
      )}
      <input
        {...inputProps}
        ref={ref}
        className={twMerge(
          "col-span-2 border-gray-300 outline-none rounded-md border inline-block overflow-hidden py-2 px-5",
          "placeholder:text-base placeholder:text-gray-400",
          props.errorMessage
            ? "border-red-500 bg-red-100 text-red-500"
            : "focus-visible:border-gray-700"
        )}
      />
    </div>
  );
};
