import { useRef } from "react";
import { AriaNumberFieldProps, useLocale, useNumberField } from "react-aria";
import { useNumberFieldState } from "react-stately";
import { twMerge } from "tailwind-merge";

interface NumberFieldProps extends AriaNumberFieldProps {}

export const NumberField = (props: NumberFieldProps) => {
  const { locale } = useLocale();
  const state = useNumberFieldState({ ...props, locale });
  const inputRef = useRef(null);
  const { labelProps, inputProps, errorMessageProps } = useNumberField(
    props,
    state,
    inputRef
  );
  return (
    <div className="inline-grid grid-cols-1 gap-y-2">
      <label
        className={twMerge(
          "font-bold text-xs tracking-[0.2em] uppercase text-gray-500",
          props.errorMessage && "text-red-500"
        )}
        {...labelProps}
      >
        {props.label}
      </label>
      <input
        {...inputProps}
        className={twMerge(
          "border tracking-wide cursor-pointer outline-none border-gray-300 text-gray-800 rounded-md text-2xl font-bold py-3 px-4",
          "selection:bg-violet-200",
          "focus-visible:border-violet-600",
          "placeholder:text-gray-400",
          props.errorMessage && "border-red-400"
        )}
        ref={inputRef}
      />
      {props.errorMessage && (
        <span className="text-red-400 italic text-xs" {...errorMessageProps}>
          {props.errorMessage}
        </span>
      )}
    </div>
  );
};
