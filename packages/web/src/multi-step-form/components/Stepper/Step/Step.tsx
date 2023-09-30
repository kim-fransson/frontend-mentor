import { twMerge } from "tailwind-merge";

interface StepProps {
  active: boolean;
  title: string;
  order: number;
}

export const Step = (props: StepProps) => {
  const { active, title, order } = props;
  return (
    <div className="inline-grid grid-cols-[auto_minmax(0,_1fr)] md:gap-x-4">
      <div
        className={twMerge(
          "selection-none w-8 h-8 flex justify-center items-center text-sm rounded-full text-gray-200 border border-gray-200",
          "col-start-1 pb-[0.125rem]",
          active && "text-gray-950 bg-sky-200 border-sky-200 font-medium"
        )}
      >
        {order}
      </div>
      <span className="hidden md:inline-block col-start-2 -mt-[0.125rem] justify-self-start tracking-tight text-xs text-gray-400">
        STEP {order}
      </span>
      <span className="hidden md:inline-block col-start-2 -mt-[1.125rem] uppercase justify-self-start font-bold text-sm tracking-widest text-gray-200">
        {title}
      </span>
    </div>
  );
};
