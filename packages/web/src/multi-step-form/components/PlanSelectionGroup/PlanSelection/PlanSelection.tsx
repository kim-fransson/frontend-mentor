import { useRef } from "react";
import {
  AriaToggleButtonProps,
  mergeProps,
  useFocusRing,
  useToggleButton,
} from "react-aria";
import { useToggleState } from "react-stately";
import { twMerge } from "tailwind-merge";

interface PlanSelectionProps extends AriaToggleButtonProps {
  icon: string;
  title: string;
  price: number;
  interval: "monthly" | "yearly";
  discountLabel?: string;
}

export const PlanSelection = (props: PlanSelectionProps) => {
  const { icon, title, price, interval, discountLabel, ...reactAriaProps } =
    props;
  const ref = useRef(null);
  const state = useToggleState(reactAriaProps);
  const { buttonProps } = useToggleButton(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      className={twMerge(
        "transition-all duration-300 border w-full outline-none border-gray-200 rounded-lg p-4 select-none hover:bg-indigo-50",
        "grid grid-cols-[auto_auto_minmax(0,_1fr)] gap-x-4",
        "md:grid-cols-1",
        state.isSelected && "border-indigo-700 bg-indigo-50",
        isFocusVisible && "border-indigo-700"
      )}
    >
      <img src={icon} alt={`${title} icon`} />
      <h2 className="-mt-1 capitalize font-bold text-sky-800 col-start-2 justify-self-start md:col-start-1 md:mt-10">
        {title}
      </h2>
      <span className="text-gray-400 text-sm col-start-2 justify-self-start -mt-5 md:-mt-0 md:col-start-1">
        ${price}/{interval === "monthly" ? "mo" : "yr"}
      </span>
      {discountLabel && (
        <span className="text-xs text-sky-900 font-medium col-start-3 row-span-full ml-auto -mt-1 self-start md:mt-0 md:col-start-3">
          {discountLabel}
        </span>
      )}
    </button>
  );
};
