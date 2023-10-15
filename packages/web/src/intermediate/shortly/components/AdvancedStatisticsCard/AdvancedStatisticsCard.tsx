import { twMerge } from "tailwind-merge";

export interface AdvancedStatisticsCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  className?: string;
}

export const AdvancedStatisticsCard = ({
  title,
  icon,
  description,
  className,
}: AdvancedStatisticsCardProps) => {
  return (
    <div
      className={twMerge(
        "relative bg-white rounded-md shadow-sm px-8 pb-8 pt-20 text-center",
        className
      )}
    >
      <div
        className={twMerge(
          "absolute top-0 -translate-y-1/2 left-1/2 lg:left-8 lg:translate-x-0 -translate-x-1/2 bg-jacarta-300 w-20 h-20 rounded-full",
          "flex items-center justify-center text-teal-400"
        )}
      >
        {icon}
      </div>
      <h2 className="lg:text-start font-bold text-2xl mb-4 text-gray-900">
        {title}
      </h2>
      <p className="lg:text-start text-gray-400">{description}</p>
    </div>
  );
};
