import { twMerge } from "tailwind-merge";
import { Button } from "../Button/Button";

export interface HeroProps {}

export const Hero = () => {
  return (
    <section
      className={twMerge(
        "px-8 pb-36 flex flex-col overflow-hidden items-center justify-center relative bg-white",
        "lg:grid lg:grid-cols-2 lg:items-center lg:px-24 lg:pt-8"
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
      <h2
        className={twMerge(
          "text-gray-800 mb-4 font-bold text-4xl tracking-tight text-center",
          "lg:mb-36 lg:text-6xl lg:text-start lg:col-start-1 lg:col-span-1 lg:row-start-1"
        )}
      >
        More than just shorter links
      </h2>
      <p
        className={twMerge(
          "font-medium text-gray-400 mb-8 text-center",
          "lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:mb-10 lg:mt-20 lg:text-start lg:pr-16"
        )}
      >
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <Button
        size="large"
        className="lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:mt-52 lg:justify-self-start"
      >
        Get Started
      </Button>
    </section>
  );
};
