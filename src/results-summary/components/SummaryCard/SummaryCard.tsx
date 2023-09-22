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
      <h2 className="text-gray-900 font-semibold text-lg">{title}</h2>
      <SummaryList summaryList={summaryList} />
      <Button onPress={onContinue}>Continue</Button>
    </div>
  );
};
