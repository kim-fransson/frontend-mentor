import { StepCard } from "../StepCard/StepCard";
import ThankYou from "../../../../assets/svg/icon-thank-you.svg?react";

export const ConfirmationStep = () => {
  return (
    <StepCard>
      <div className="flex flex-col items-center justify-center py-10">
        <ThankYou className="mb-6 h-14 w-14 md:w-20 md:h-20" />
        <h2 className="text-sky-800 tracking-wide font-bold text-2xl mb-4 md:text-3xl">
          Thank you!
        </h2>
        <p className="text-gray-400 text-base text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </StepCard>
  );
};
