import { MonthlySummary } from "./components/MonthlySummary/MonthlySummary";
import { MyBalance } from "./components/MyBalance/MyBalance";
import { WeeklySpendingGraphs } from "./components/WeeklySpendingGraphs/WeeklySpendingGraphs";

export interface ExpenseChartProps {
  currentBalance: number;
  weeklyExpenses: DailyExpense[];
  lastMonthlyCost: number;
  totalMonthlyCost: number;
}

export const ExpenseChart = ({
  currentBalance,
  weeklyExpenses,
  lastMonthlyCost,
  totalMonthlyCost,
}: ExpenseChartProps) => {
  return (
    <div className="font-dm-sans flex flex-col gap-4 max-w-sm md:min-w-[384px]">
      <MyBalance balance={currentBalance} />
      <div className="bg-white rounded-lg px-4 py-6">
        <h2 className="text-2xl text-gray-800 font-bold mb-4">
          Spending - Last 7 days
        </h2>
        <WeeklySpendingGraphs weeklyExpenses={weeklyExpenses} scale={3} />
        <hr className="border-tomato-900 my-7" />
        <MonthlySummary
          lastMonthlyCost={lastMonthlyCost}
          totalMonthlyCost={totalMonthlyCost}
        />
      </div>
    </div>
  );
};
