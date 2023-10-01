import { useState } from "react";
import {
  AddOn,
  AddOnSelectionGroup,
} from "../../AddOnSelectionGroup/AddOnSelectionGroup/AddOnSelectionGroup";
import { StepCard } from "../StepCard/StepCard";

interface PickAddonsStepProps {
  onNext: (selectedAddOns: AddOn[]) => void;
  onBack: () => void;
  interval: "monthly" | "yearly";
}

export const PickAddonsStep = (props: PickAddonsStepProps) => {
  const { interval, onBack, onNext } = props;
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);
  return (
    <StepCard
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience"
      onNextDisabled={false}
      onBack={onBack}
      onNext={() => onNext(selectedAddOns)}
    >
      <AddOnSelectionGroup interval={interval} onChange={setSelectedAddOns} />
    </StepCard>
  );
};
