import { useRef } from "react";
import { Checkbox } from "../../Checkbox/Checkbox";
import { twMerge } from "tailwind-merge";
import {
  AriaToggleButtonProps,
  mergeProps,
  useFocusRing,
  useToggleButton,
} from "react-aria";
import { useToggleState } from "react-stately";

interface AddOnSelectionProps extends AriaToggleButtonProps {
  title: string;
  description: string;
  price: number;
  interval: "monthly" | "yearly";
  isSelected: boolean;
}

export const AddOnSelection = (props: AddOnSelectionProps) => {
  const { title, description, price, interval, ...reactAriaProps } = props;
  const ref = useRef(null);
  const state = useToggleState(reactAriaProps);
  const { buttonProps } = useToggleButton(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      className={twMerge(
        "hover:bg-indigo-50 border cursor-pointer select-none outline-none border-gray-200 duration-300 transition-all rounded-lg p-4",
        "flex items-center gap-6",
        state.isSelected && "border-indigo-700 bg-indigo-50",
        isFocusVisible && "border-indigo-700"
      )}
    >
      <Checkbox
        isSelected={state.isSelected}
        aria-label={`select add-on ${title}`}
        isDisabled
      />

      <div className="flex items-baseline flex-col gap-1">
        <h2 className="font-bold text-sm text-sky-800">{title}</h2>
        <p className="text-xs text-gray-400 font-medium">{description}</p>
      </div>

      <span className="ml-auto tracking-wide text-indigo-700 text-sm">
        +${price}/{interval === "monthly" ? "mo" : "yr"}
      </span>
    </button>
  );
};
