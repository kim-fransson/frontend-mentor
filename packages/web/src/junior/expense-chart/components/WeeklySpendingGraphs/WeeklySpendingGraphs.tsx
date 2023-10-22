import { useMeasure } from "@uidotdev/usehooks";
import { Bar } from "./Bar/Bar";
import { useCallback, useEffect, useState } from "react";

export interface WeeklySpendingGraphsProps {
  weeklyExpenses: DailyExpense[];
  scale?: number;
}

export const WeeklySpendingGraphs = ({
  weeklyExpenses,
}: WeeklySpendingGraphsProps) => {
  const [ref, { height }] = useMeasure<HTMLDivElement>();
  const [scale, setScale] = useState(3);
  const maxAmount = Math.max(
    ...weeklyExpenses.map((expense) => expense.amount)
  );

  const calculateScale = useCallback(() => {
    if (height !== null) {
      if (maxAmount * scale > 0.9 * height) {
        return height / maxAmount;
      }
    }
    return 3;
  }, [height, maxAmount, scale]);

  useEffect(() => {
    setScale(calculateScale());
  }, [calculateScale]);

  const weeklyExpensesWithIsHighest = weeklyExpenses.map((expense) => ({
    ...expense,
    isHighest: expense.amount === maxAmount,
  }));
  return (
    <div ref={ref} className="grid grid-cols-7 gap-x-4 items-end h-[230px]">
      {weeklyExpensesWithIsHighest.map((expense) => (
        <Bar
          key={expense.day}
          label={expense.day}
          scale={scale}
          value={expense.amount}
          color={expense.isHighest ? "blue" : "orange"}
        />
      ))}
    </div>
  );
};
