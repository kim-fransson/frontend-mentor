import { twMerge } from "tailwind-merge";
import { Button } from "../Button/Button";

export interface HeroProps {}

export const Hero = () => {
  return (
    <section
      className={twMerge(
        "px-8 pb-36 flex flex-col overflow-hidden items-center justify-center relative bg-white",
        "lg:grid lg:grid-cols-2 lg:grid-flow-col lg:items-center lg:px-24 lg:pt-8"
      )}
    >
      <div
        className={twMerge(
          "mb-8 -mx-8 w-[30rem] relative overflow-hidden",
          "lg:col-span-1 lg:col-start-2 lg:mb-0 lg:-mx-24 lg:w-[38rem] lg:justify-self-end"
        )}
      >
        <img
          className="left-24 relative"
          src="/images/shortly/illustration-working.svg"
          alt="working lady in front of computer"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <h2
          className={twMerge(
            "text-gray-800 mb-4 font-bold text-4xl tracking-tight text-center",
            "lg:text-6xl lg:text-start"
          )}
        >
          More than just shorter links
        </h2>
        <p
          className={twMerge(
            "font-medium text-gray-400 mb-8 text-center",
            "lg:text-start lg:pr-16"
          )}
        >
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button size="large" className="lg:justify-self-start">
          Get Started
        </Button>
      </div>
    </section>
  );
};
