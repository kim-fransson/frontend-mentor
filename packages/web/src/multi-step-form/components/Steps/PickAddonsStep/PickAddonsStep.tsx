import { useState } from "react";
import {
  AddOn,
  AddOnSelectionGroup,
} from "../../AddOnSelectionGroup/AddOnSelectionGroup/AddOnSelectionGroup";
import { StepCard } from "../StepCard/StepCard";

interface PickAddonsStepProps {
  onNext: (selectedAddOns: AddOn[]) => void;
  onBack: (selectedAddOns: AddOn[]) => void;
  interval: "monthly" | "yearly";
  data?: AddOn[];
}

export const PickAddonsStep = (props: PickAddonsStepProps) => {
  const { interval, onBack, onNext, data } = props;
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>(data || []);
  return (
    <StepCard
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience"
      onNextDisabled={false}
      onBack={() => onBack(selectedAddOns)}
      onNext={() => onNext(selectedAddOns)}
    >
      <AddOnSelectionGroup
        selectedAddons={data}
        interval={interval}
        onChange={setSelectedAddOns}
      />
    </StepCard>
  );
};
