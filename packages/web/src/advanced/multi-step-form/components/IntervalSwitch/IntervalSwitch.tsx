import { useState } from "react";
import { Switch } from "../Switch/Switch";
import { twMerge } from "tailwind-merge";

type Interval = "monthly" | "yearly";

export interface IntervalSwitchProps {
  onChange?: (interval: Interval) => void;
  activeInterval: Interval;
}

export const IntervalSwitch = (props: IntervalSwitchProps) => {
  const [activeInterval, setActiveInterval] = useState<Interval>(
    props.activeInterval
  );
  const { onChange } = props;

  return (
    <div className="select-none flex gap-6 items-center justify-center p-3 rounded-lg bg-indigo-50">
      <span
        className={twMerge(
          "font-medium text-gray-400 transition-all duration-150",
          activeInterval === "monthly" && "text-sky-800"
        )}
      >
        Monthly
      </span>
      <Switch
        isSelected={activeInterval === "yearly"}
        onChange={(selected) => {
          setActiveInterval(selected ? "yearly" : "monthly");
          onChange && onChange(selected ? "yearly" : "monthly");
        }}
        aria-label="interval between monthly or yearly"
      />
      <span
        className={twMerge(
          "font-medium text-gray-400 transition-all duration-150",
          activeInterval === "yearly" && "text-sky-800"
        )}
      >
        Yearly
      </span>
    </div>
  );
};
