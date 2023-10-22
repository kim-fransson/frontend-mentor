import { Bar } from "./Bar/Bar";

export interface WeeklySpendingGraphsProps {
  weeklyExpenses: DailyExpense[];
  scale?: number;
}

export const WeeklySpendingGraphs = ({
  weeklyExpenses,
  scale = 1,
}: WeeklySpendingGraphsProps) => {
  const maxAmount = Math.max(
    ...weeklyExpenses.map((expense) => expense.amount)
  );

  const weeklyExpensesWithIsHighest = weeklyExpenses.map((expense) => ({
    ...expense,
    isHighest: expense.amount === maxAmount,
  }));
  return (
    <div className="grid grid-cols-7 gap-x-4 items-end">
      {weeklyExpensesWithIsHighest.map((expense) => (
        <Bar
          label={expense.day}
          scale={scale}
          value={expense.amount}
          color={expense.isHighest ? "blue" : "orange"}
        />
      ))}
    </div>
  );
};
