export interface MonthlySummaryProps {
  totalMonthlyCost: number;
  lastMonthlyCost: number;
}

export const MonthlySummary = ({
  totalMonthlyCost,
  lastMonthlyCost,
}: MonthlySummaryProps) => {
  const percentageDiff = (totalMonthlyCost / lastMonthlyCost) * 100 - 100;
  const formattedPercentageDiff = percentageDiff.toFixed(1);
  const sign = percentageDiff >= 0 ? "+" : "";
  const costDiffFromLastMonth = `${sign}${formattedPercentageDiff}`;
  return (
    <div className="flex justify-between">
      <div className="flex flex-col items-start justify-center">
        <span className="text-sm text-gray-400 tracking-wider">
          Total this month
        </span>
        <span className="before:content-['$'] font-bold text-3xl text-gray-800">
          {totalMonthlyCost}
        </span>
      </div>
      <div className="flex flex-col justify-end items-end">
        <span className="after:content-['﹪'] font-bold text-gray-800 tracking-tight text-sm">
          {costDiffFromLastMonth}
        </span>
        <span className="text-sm text-gray-400 tracking-wider">
          from last month
        </span>
      </div>
    </div>
  );
};
