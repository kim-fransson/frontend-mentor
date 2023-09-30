import { Step } from "./Step/Step";

interface StepperProps {
  steps: string[];
  activeStep: number;
}

export const Stepper = (props: StepperProps) => {
  const { steps, activeStep } = props;
  return (
    <div className="inline-flex gap-4 md:flex-col md:gap-8">
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
