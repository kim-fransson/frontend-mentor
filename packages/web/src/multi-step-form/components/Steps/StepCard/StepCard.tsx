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
  } = props;

  return (
    <div className="bg-white shadow-lg rounded-xl px-6 pt-7 pb-10 flex flex-col">
      {props.title && (
        <h2 className="text-sky-800 tracking-wide font-bold text-2xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-gray-400 text-base mt-2 mb-6">{props.description}</p>
      )}
      {children}
      {(onBack || onNext) && (
        <div
          className={twMerge(
            "flex items-center bg-white fixed bottom-0 left-0 right-0 px-4 py-4",
            "md:static md:p-0 md:pt-32"
          )}
        >
          {onBack && (
            <Button variant="ghost" onPress={onBack}>
              {onBackButtonLabel}
            </Button>
          )}
          {onNext && (
            <Button
              isDisabled={onNextDisabled}
              className="ml-auto"
              variant={onNextButtonVariant}
              onPress={onNext}
            >
              {onNextButtonLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
