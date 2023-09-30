import { useState } from "react";
import { Checkbox } from "../../Checkbox/Checkbox";
import { twMerge } from "tailwind-merge";

interface AddOnSelectionProps {
  title: string;
  description: string;
  price: number;
  interval: "monthly" | "yearly";
  isSelected: boolean;
  onChange?: (selected: boolean) => void;
}

export const AddOnSelection = (props: AddOnSelectionProps) => {
  const { title, description, price, interval, isSelected, onChange } = props;
  const [selected, setSelected] = useState(isSelected);
  return (
    <div
      className={twMerge(
        "border outline-none border-gray-200 duration-300 transition-all rounded-lg p-4",
        "flex items-center gap-6",
        selected && "border-indigo-700 bg-indigo-50"
      )}
    >
      <Checkbox
        isSelected={selected}
        onChange={(selected) => {
          setSelected(selected);
          onChange && onChange(selected);
        }}
        aria-label={`select add-on ${title}`}
      />

      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-sm text-blue-950">{title}</h2>
        <p className="text-xs text-gray-400 font-medium">{description}</p>
      </div>

      <span className="ml-auto tracking-wide text-indigo-700 text-sm">
        +${price}/{interval === "monthly" ? "mo" : "yr"}
      </span>
    </div>
  );
};
