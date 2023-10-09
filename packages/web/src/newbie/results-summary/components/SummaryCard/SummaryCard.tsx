import { Button } from "../Button/Button";
import { Summary, SummaryList } from "../SummaryList/SummaryList";

interface SummaryCardProps {
  summaryList: Summary[];
  title: string;
  onContinue: () => void;
}

export const SummaryCard = (props: SummaryCardProps) => {
  const { summaryList, title, onContinue } = props;
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-gray-800 tracking-wide font-semibold text-lg md:text-xl">
        {title}
      </h2>
      <SummaryList summaryList={summaryList} />
      <Button onPress={onContinue}>Continue</Button>
    </div>
  );
};
