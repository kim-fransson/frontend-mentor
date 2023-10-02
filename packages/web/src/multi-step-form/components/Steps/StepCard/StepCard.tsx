import { PropsWithChildren } from "react";
import { Button, ButtonVariant } from "../../Button/Button";
import { twMerge } from "tailwind-merge";

interface StepCardProps extends PropsWithChildren {
  title?: string;
  description?: string;
  onBack?: () => void;
  onBackButtonLabel?: string;
  onNext?: () => void;
  onNextDisabled?: boolean;
  onNextButtonLabel?: string;
  onNextButtonVariant?: ButtonVariant;
  className?: string;
  animate?: boolean;
}

export const StepCard = (props: StepCardProps) => {
  const {
    title,
    description,
    onBack,
    onBackButtonLabel = "Go Back",
    onNext,
    onNextDisabled = false,
    onNextButtonLabel = "Next Step",
    onNextButtonVariant = "primary",
    children,
    className,
    animate = true,
  } = props;

  return (
    <div
      className={twMerge(
        "md:flex md:flex-col md:justify-around w-full overflow-hidden",
        className
      )}
    >
      <div
        className={twMerge(
          "bg-white shadow-lg rounded-xl px-6 pt-7 pb-10 flex flex-col",
          "md:shadow-none md:w-full md:rounded-none md:p-4",
          animate && "animate-in fade-in slide-in-from-right-full duration-300",
          "md:animate-none"
        )}
      >
        {props.title && (
          <h2 className="text-sky-800 tracking-wide font-bold text-2xl">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-gray-400 text-base mt-2 mb-6">
            {props.description}
          </p>
        )}
        {children}
      </div>
      {(onBack || onNext) && (
        <div
          className={twMerge(
            "flex items-center bg-white fixed bottom-0 left-0 right-0 px-4 py-4",
            "md:static md:p-0 md:mt-auto md:px-4"
          )}
        >
          {onNext && (
            <Button
              isDisabled={onNextDisabled}
              className="ml-auto order-2"
              variant={onNextButtonVariant}
              onPress={onNext}
            >
              {onNextButtonLabel}
            </Button>
          )}
          {onBack && (
            <Button className="order-1" variant="ghost" onPress={onBack}>
              {onBackButtonLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
