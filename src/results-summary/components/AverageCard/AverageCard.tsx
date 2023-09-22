import classNames from "classnames";
import { AverageDisplay } from "../AverageDisplay/AverageDisplay";

interface AverageCardProps {
  totalScore: number;
  scores: number[];
  title: string;
}

export const AverageCard = (props: AverageCardProps) => {
  const { totalScore, scores, title } = props;
  return (
    <div
      className={classNames(
        "flex flex-col items-center gap-3 px-8 pt-6 pb-10",
        "md:justify-around md:gap-0 md:px-12"
      )}
    >
      <h2 className="text-gray-300 tracking-wide text-lg md:text-xl font-semibold mb-2 md:mt-0">
        {title}
      </h2>
      <div className="md:mt-3">
        <AverageDisplay totalScore={totalScore} scores={scores} />
      </div>
      <h3 className="text-gray-100 tracking-wide text-xl md:text-3xl font-semibold mt-6 md:mt-10">
        Great
      </h3>
      <p
        className={classNames(
          "text-sm text-center text-gray-300",
          "tracking-wide md:text-sm md:mb-0"
        )}
      >
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};
