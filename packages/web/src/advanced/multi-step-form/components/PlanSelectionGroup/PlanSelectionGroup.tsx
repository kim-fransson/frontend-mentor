import { useState } from "react";
import { PlanSelection } from "./PlanSelection/PlanSelection";

export interface Plan {
  id: number;
  title: string;
  discountLabel: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

const plans = [
  {
    id: 0,
    title: "arcade",
    discountLabel: "2 months free",
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: "/images/multi-step-form/icon-arcade.svg",
  },
  {
    id: 1,
    title: "advanced",
    discountLabel: "2 months free",
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: "/images/multi-step-form/icon-advanced.svg",
  },
  {
    id: 2,
    title: "pro",
    discountLabel: "2 months free",
    monthlyPrice: 15,
    yearlyPrice: 150,
    icon: "/images/multi-step-form/icon-pro.svg",
  },
];

export interface PlanSelectionGroupProps {
  onChange?: (plan?: Plan) => void;
  interval: "monthly" | "yearly";
  selectedPlan?: Plan;
}

export const PlanSelectionGroup = (props: PlanSelectionGroupProps) => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | undefined>(
    props.selectedPlan
  );
  const { onChange } = props;

  const handleSelectionChange = (selected: boolean, plan: Plan) => {
    setSelectedPlan(selected ? plan : undefined);
    onChange && onChange(selected ? plan : undefined);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {plans.map((plan) => (
        <PlanSelection
          isSelected={selectedPlan?.id === plan.id}
          onChange={(selected) => handleSelectionChange(selected, plan)}
          key={plan.id}
          icon={plan.icon}
          title={plan.title}
          interval={props.interval}
          price={
            props.interval === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
          }
          discountLabel={plan.discountLabel}
        />
      ))}
    </div>
  );
};
