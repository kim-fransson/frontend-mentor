import { Stepper } from "../Stepper/Stepper";

interface SidebarProps {
  steps: string[];
  activeStep: number;
}

export const Sidebar = (props: SidebarProps) => {
  const { activeStep, steps } = props;
  return (
    <div className="flex w-screen md:w-auto relative justify-center md:justify-start">
      <picture className="w-full h-auto">
        <source
          media="(min-width:768px)"
          srcSet="/images/multi-step-form/bg-sidebar-desktop.svg"
        />
        <img
          className="w-full"
          src="/images/multi-step-form/bg-sidebar-mobile.svg"
          alt="illustration sidebar"
        />
      </picture>
      <Stepper
        className="absolute top-7 md:top-10 md:left-10"
        steps={steps}
        activeStep={activeStep}
      />
    </div>
  );
};
