import { twMerge } from "tailwind-merge";
import { Step } from "./Step/Step";

interface StepperProps {
  steps: string[];
  activeStep: number;
  className?: string;
}

export const Stepper = (props: StepperProps) => {
  const { steps, activeStep, className } = props;
  return (
    <div
      className={twMerge(
        "inline-flex gap-4 md:flex-col md:gap-8 bg-ur",
        className
      )}
    >
      {steps.map((step, index) => (
        <Step
          key={index}
          order={index + 1}
          title={step}
          active={activeStep === index + 1}
        />
      ))}
    </div>
  );
};
