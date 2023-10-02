import { StepCard } from "../StepCard/StepCard";
import ThankYou from "../../../../assets/svg/icon-thank-you.svg?react";
import ConfettiExplosion from "react-confetti-explosion";

const confettiSettings = {
  force: 0.8,
  duration: 3000,
  particleCount: 250,
  width: 1600,
};

export const ConfirmationStep = () => {
  return (
    <StepCard animate={false} className="relative md:justify-start">
      <ConfettiExplosion {...confettiSettings} />
      <ConfettiExplosion {...confettiSettings} className="absolute right-0" />
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
