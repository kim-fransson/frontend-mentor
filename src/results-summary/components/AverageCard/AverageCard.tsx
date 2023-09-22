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
        "flex flex-col items-center gap-3 px-14 pt-6 pb-10",
        "md:justify-around md:gap-0"
      )}
    >
      <h2 className="text-gray-400 text-lg font-semibold mb-2 md:mt-1">
        {title}
      </h2>
      <div className="md:mt-3">
        <AverageDisplay totalScore={totalScore} scores={scores} />
      </div>
      <h3 className="text-gray-100 text-xl md:text-3xl font-semibold mt-6 md:mt-14">
        Great
      </h3>
      <p
        className={classNames("text-base text-gray-400", "text-center md:mb-0")}
      >
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};
