import { useState } from "react";
import { Switch } from "../Switch/Switch";
import { twMerge } from "tailwind-merge";

type Interval = "monthly" | "yearly";

export interface IntervalSwitchProps {
  onChange?: (interval: Interval) => void;
}

export const IntervalSwitch = (props: IntervalSwitchProps) => {
  const [activeInterval, setActiveInterval] = useState<Interval>("monthly");
  const { onChange } = props;

  return (
    <div className="flex gap-6 items-center justify-center p-3 rounded-lg bg-indigo-50">
      <span
        className={twMerge(
          "font-medium text-gray-400 transition-all duration-150",
          activeInterval === "monthly" && "text-blue-950"
        )}
      >
        Monthly
      </span>
      <Switch
        onChange={(selected) => {
          setActiveInterval(selected ? "yearly" : "monthly");
          onChange && onChange(selected ? "yearly" : "monthly");
        }}
        aria-label="interval between monthly or yearly"
      />
      <span
        className={twMerge(
          "font-medium text-gray-400 transition-all duration-150",
          activeInterval === "yearly" && "text-blue-950"
        )}
      >
        Yearly
      </span>
    </div>
  );
};
