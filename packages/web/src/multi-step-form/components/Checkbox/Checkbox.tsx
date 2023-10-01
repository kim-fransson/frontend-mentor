import { useRef } from "react";
import {
  AriaCheckboxProps,
  VisuallyHidden,
  useCheckbox,
  useFocusRing,
} from "react-aria";
import { useToggleState } from "react-stately";
import { twMerge } from "tailwind-merge";

import CheckmarkIcon from "../../../assets/svg/icon-checkmark.svg?react";

interface CheckboxProps extends AriaCheckboxProps {}

export const Checkbox = (props: CheckboxProps) => {
  const state = useToggleState(props);
  const ref = useRef(null);
  const { inputProps } = useCheckbox(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const isSelected = state.isSelected && !props.isIndeterminate;

  return (
    <label className="inline-flex">
      <VisuallyHidden>
        <input tabIndex={-1} {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <div
        className={twMerge(
          "transition-all duration-100 inline-block cursor-pointer relative w-5 h-5 bg-white rounded border border-gray-300",
          isSelected && "bg-indigo-700 border-indigo-700",
          isFocusVisible && "border-2 border-violet-500"
        )}
      >
        {isSelected && (
          <CheckmarkIcon className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
        )}
      </div>
      {props.children}
    </label>
  );
};
