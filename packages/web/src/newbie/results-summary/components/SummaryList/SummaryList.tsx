import { Summary } from "../Summary/Summary";

import ReactionIcon from "../../assets/icon-reaction.svg?react";
import MemoryIcon from "../../assets/icon-memory.svg?react";
import VerbalIcon from "../../assets/icon-verbal.svg?react";
import VisualIcon from "../../assets/icon-visual.svg?react";

export interface Summary {
  category: "Reaction" | "Memory" | "Verbal" | "Visual";
  score: number;
}

interface SummaryListProps {
  summaryList: Summary[];
}

export const SummaryList = (props: SummaryListProps) => {
  const { summaryList } = props;
  return (
    <div className="flex flex-col gap-5">
      {summaryList.map((summary) => {
        switch (summary.category) {
          case "Reaction":
            return (
              <Summary
                key={summary.category}
                color="red"
                title={summary.category}
                icon={<ReactionIcon />}
                points={summary.score}
                totalPoints={100}
              />
            );
          case "Memory":
            return (
              <Summary
                key={summary.category}
                color="yellow"
                title={summary.category}
                icon={<MemoryIcon />}
                points={summary.score}
                totalPoints={100}
              />
            );
          case "Verbal":
            return (
              <Summary
                key={summary.category}
                color="green"
                title={summary.category}
                icon={<VerbalIcon />}
                points={summary.score}
                totalPoints={100}
              />
            );
          case "Visual":
            return (
              <Summary
                key={summary.category}
                color="blue"
                title={summary.category}
                icon={<VisualIcon />}
                points={summary.score}
                totalPoints={100}
              />
            );
        }
      })}
    </div>
  );
};
