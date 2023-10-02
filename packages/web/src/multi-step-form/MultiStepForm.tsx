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
import { twMerge } from "tailwind-merge";

const steps = ["your info", "select plan", "add-ons", "summary"];

export const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selections, setSelections] = useState<Selections>();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const renderStep = (step: number) => {
    switch (step) {
      case 1:
        return (
          <PersonalInformationStep
            data={selections?.userData}
            onNext={(userData) => {
              setSelections((curr) => ({ ...curr, userData }));
              setActiveStep(2);
            }}
          />
        );
      case 2:
        return (
          <SelectYourPlanStep
            data={selections?.yourPlan}
            onBack={(yourPlan) => {
              setSelections((curr) => ({ ...curr, yourPlan }));
              setActiveStep(1);
            }}
            onNext={(yourPlan) => {
              setSelections((curr) => ({ ...curr, yourPlan }));
              setActiveStep(3);
            }}
          />
        );
      case 3:
        return (
          <PickAddonsStep
            data={selections!.addons}
            interval={selections!.yourPlan!.interval}
            onBack={(addons) => {
              setSelections((curr) => ({ ...curr, addons }));
              setActiveStep(2);
            }}
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
    <div
      className={twMerge(
        "h-screen flex flex-col font-ubuntu items-center",
        "md:items-stretch md:justify-stretch md:flex-row max-w-5xl md:rounded-lg md:shadow-lg md:h-auto md:bg-white md:p-4 md:gap-24"
      )}
    >
      <Sidebar steps={steps} activeStep={activeStep} />
      <div
        className={twMerge(
          "absolute top-24 px-4 pb-24",
          "md:static md:flex md:top-0 md:px-0 md:pb-0 md:pr-16 md:pt-4 md:flex-1"
        )}
      >
        {showConfirmation ? <ConfirmationStep /> : renderStep(activeStep)}
      </div>
    </div>
  );
};
