import { Advice } from "../../env";
import Dice from "../../assets/icon-dice.svg?react";
import PatternDividerMobile from "../../assets/pattern-divider-mobile.svg?react";
import PatternDividerDesktop from "../../assets/pattern-divider-desktop.svg?react";
import { useMediaQuery } from "@uidotdev/usehooks";

export interface AdviceCardProps {
  advice: Advice;
  onNextAdvice: () => void;
}

export const AdviceCard = ({ advice, onNextAdvice }: AdviceCardProps) => {
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");
  return (
    <article
      key={advice.id}
      className="flex relative flex-col items-center gap-8 rounded-xl px-5 lg:px-8 pt-8 lg:pt-10 pb-16 bg-gray-600 
      shadow-lg font-manrope font-extrabold max-w-lg"
    >
      <h2
        className="text-xs flex items-center justify-center text-emerald-400 tracking-[0.2rem]
          animate-fade animate-duration-500 animate-ease-in"
      >
        <span className="mr-4">ADVICE</span>
        <span>#{advice.id}</span>
      </h2>
      <p
        className="text-2xl text-center text-slate-200 before:content-['“'] after:content-['”']
          animate-fade animate-duration-500 animate-ease-in"
      >
        {advice.advice}
      </p>
      {isDesktop ? <PatternDividerDesktop /> : <PatternDividerMobile />}
      <button
        className="flex items-center justify-center p-5 rounded-full absolute outline-none
          bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-emerald-400 group
          focus-visible:bg-gray-800 transition-colors duration-200 ease-in-out"
        onClick={() => {
          onNextAdvice();
        }}
      >
        <Dice
          className="text-gray-800 group-focus-visible:text-emerald-400 
          group-hover:animate-wiggle group-hover:animate-infinite group-hover:animate-duration-[400ms] group-hover:animate-ease-in
          group-focus-visible:animate-wiggle group-focus-visible:animate-infinite group-focus-visible:animate-duration-[400ms] group-focus-visible:animate-ease-in"
        />
      </button>
    </article>
  );
};
