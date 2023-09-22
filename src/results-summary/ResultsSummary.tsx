import classNames from "classnames";
import { AverageCard } from "./components/AverageCard/AverageCard";
import { SummaryCard } from "./components/SummaryCard/SummaryCard";
import { Summary } from "./components/SummaryList/SummaryList";

interface ResultsSummaryProps {
  summaryList: Summary[];
  totalScore: number;
  onContinue: () => void;
}

export const ResultsSummary = (props: ResultsSummaryProps) => {
  const { summaryList, totalScore, onContinue } = props;
  const scores = summaryList.map((summary) => summary.score);
  return (
    <div
      className={classNames(
        "w-full flex flex-col items-center justify-center gap-8 bg-white font-hanken-grotesk",
        "md:flex-row md:shadow-2xl md:rounded-3xl md:items-stretch md:max-w-3xl md:gap-4"
      )}
    >
      <div
        className={classNames(
          "rounded-b-3xl w-full bg-gradient-to-b from-indigo-700 via-indigo-600 to-blue-700",
          "md:rounded-3xl md:max-w-xs md:flex"
        )}
      >
        <AverageCard
          title="Your Result"
          scores={scores}
          totalScore={totalScore}
        />
      </div>
      <div className={classNames("w-full px-4 mb-4", "md:flex-1 md:p-8")}>
        <SummaryCard
          title="Summary"
          summaryList={summaryList}
          onContinue={onContinue}
        />
      </div>
    </div>
  );
};
