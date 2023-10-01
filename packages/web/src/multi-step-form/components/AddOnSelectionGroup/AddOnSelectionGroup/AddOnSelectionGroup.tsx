import { useState } from "react";
import { AddOnSelection } from "../AddOnSelection/AddOnSelection";

export interface AddOn {
  id: number;
  title: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

const addOns = [
  {
    id: 0,
    title: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: 1,
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: 2,
    title: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

interface AddOnSelectionGroupProps {
  onChange?: (addOns: AddOn[]) => void;
  interval: "monthly" | "yearly";
}

export const AddOnSelectionGroup = (props: AddOnSelectionGroupProps) => {
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);
  const { onChange, interval } = props;

  const handleAddOnChange = (selected: boolean, addOn: AddOn) => {
    setSelectedAddOns((curr) => {
      if (selected) {
        if (!curr.some((a) => a.id === addOn.id)) {
          const updated = [...curr, addOn];
          onChange && onChange(updated);
          return updated;
        }
      } else {
        const updated = curr.filter((a) => a.id !== addOn.id);
        onChange && onChange(updated);
        return updated;
      }
      return curr;
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {addOns.map((addOn) => (
        <AddOnSelection
          isSelected={
            selectedAddOns.find((a) => a.id === addOn.id)?.id !== undefined
          }
          onChange={(selected) => handleAddOnChange(selected, addOn)}
          key={addOn.id}
          title={addOn.title}
          interval={interval}
          price={
            interval === "monthly" ? addOn.monthlyPrice : addOn.yearlyPrice
          }
          description={addOn.description}
        />
      ))}
    </div>
  );
};
