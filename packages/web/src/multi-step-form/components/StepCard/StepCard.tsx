import { PropsWithChildren } from "react";

interface StepCardProps extends PropsWithChildren {
  title?: string;
  description?: string;
}

export const StepCard = (props: StepCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-xl px-6 pt-7 pb-10 flex flex-col">
      {props.title && (
        <h2 className="text-gray-900 tracking-wide font-bold text-2xl">
          {props.title}
        </h2>
      )}
      {props.description && (
        <p className="text-gray-400 text-base mt-2 mb-6">{props.description}</p>
      )}
      {props.children}
    </div>
  );
};
