import { useState } from "react";
import { IntervalSwitch } from "../../IntervalSwitch/IntervalSwitch";
import {
  Plan,
  PlanSelectionGroup,
} from "../../PlanSelectionGroup/PlanSelectionGroup";
import { StepCard } from "../StepCard/StepCard";

export interface YourPlan {
  plan?: Plan;
  interval: "monthly" | "yearly";
}

interface SelectYourPlanStepProps {
  onNext: (yourPlan: YourPlan) => void;
  onBack: (yourPlan: YourPlan) => void;
  data?: YourPlan;
}

export const SelectYourPlanStep = (props: SelectYourPlanStepProps) => {
  const { onNext, onBack, data } = props;
  const [yourPlan, setYourPlan] = useState<YourPlan>({
    plan: data?.plan,
    interval: data?.interval || "monthly",
  });
  return (
    <StepCard
      onNext={() => onNext(yourPlan)}
      onBack={() => onBack(yourPlan)}
      onNextDisabled={!yourPlan.plan}
      title="Select your plan"
      description="You have the option of monthly or yearly billing"
    >
      <div className="flex flex-col gap-4 md:gap-8">
        <PlanSelectionGroup
          selectedPlan={yourPlan.plan}
          interval={yourPlan.interval}
          onChange={(plan) => setYourPlan((curr) => ({ ...curr, plan }))}
        />
        <IntervalSwitch
          activeInterval={yourPlan.interval}
          onChange={(interval) =>
            setYourPlan((curr) => ({ ...curr, interval }))
          }
        />
      </div>
    </StepCard>
  );
};
