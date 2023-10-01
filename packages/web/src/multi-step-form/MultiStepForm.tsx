import { useState } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { PersonalInformationStep } from "./components/Steps/PersonalInformationStep/PersonalInformationStep";
import { SelectYourPlanStep } from "./components/Steps/SelectYourPlanStep/SelectYourPlanStep";
import { PickAddonsStep } from "./components/Steps/PickAddonsStep/PickAddonsStep";
import {
  FinishingUpStep,
  Selections,
} from "./components/Steps/FinishingUpStep/FinishingUpStep";
import { ConfirmationStep } from "./components/Steps/ConfirmationStep/ConfirmationStep";

interface MultiStepFormProps {}

const steps = ["your info", "select plan", "add-ons", "summary"];

export const MultiStepForm = (props: MultiStepFormProps) => {
  const [activeStep, setActiveStep] = useState(1);
  const [selections, setSelections] = useState<Selections>();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const renderStep = (step: number) => {
    switch (step) {
      case 1:
        return <PersonalInformationStep onNext={() => setActiveStep(2)} />;
      case 2:
        return (
          <SelectYourPlanStep
            onBack={() => setActiveStep(1)}
            onNext={(yourPlan) => {
              setSelections((curr) => ({ ...curr, yourPlan }));
              setActiveStep(3);
            }}
          />
        );
      case 3:
        return (
          <PickAddonsStep
            interval={selections!.yourPlan!.interval}
            onBack={() => setActiveStep(2)}
            onNext={(addons) => {
              setSelections((curr) => ({ ...curr, addons }));
              setActiveStep(4);
            }}
          />
        );
      case 4:
        return (
          <FinishingUpStep
            onBack={() => setActiveStep(3)}
            onConfirm={() => setShowConfirmation(true)}
            onChangePlan={() => setActiveStep(2)}
            selections={selections as Selections}
          />
        );
    }
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <Sidebar steps={steps} activeStep={activeStep} />
      <div className="absolute top-24 px-4 pb-24">
        {showConfirmation ? <ConfirmationStep /> : renderStep(activeStep)}
      </div>
    </div>
  );
};
