import { useState } from "react";
import { IntervalSwitch } from "../../IntervalSwitch/IntervalSwitch";
import {
  Plan,
  PlanSelectionGroup,
} from "../../PlanSelectionGroup/PlanSelectionGroup";
import { StepCard } from "../StepCard/StepCard";

interface YourPlan {
  plan?: Plan;
  interval: "monthly" | "yearly";
}

interface SelectYourPlanStepProps {
  onNext: (yourPlan: YourPlan) => void;
  onBack: () => void;
}

export const SelectYourPlanStep = (props: SelectYourPlanStepProps) => {
  const { onNext, onBack } = props;
  const [yourPlan, setYourPlan] = useState<YourPlan>({
    plan: undefined,
    interval: "monthly",
  });
  return (
    <StepCard
      onNext={() => onNext(yourPlan)}
      onBack={onBack}
      onNextDisabled={!yourPlan.plan}
      title="Select your plan"
      description="You have the option of monthly or yearly billing"
    >
      <div className="flex flex-col gap-4">
        <PlanSelectionGroup
          interval={yourPlan.interval}
          onChange={(plan) => setYourPlan((curr) => ({ ...curr, plan }))}
        />
        <IntervalSwitch
          onChange={(interval) =>
            setYourPlan((curr) => ({ ...curr, interval }))
          }
        />
      </div>
    </StepCard>
  );
};
