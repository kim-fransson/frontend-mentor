import type { Meta, StoryObj } from "@storybook/react";
import { ExpenseChart } from "./ExpenseChart";
import { weeklyExpenses } from "./data";

const meta: Meta<typeof ExpenseChart> = {
  component: ExpenseChart,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#f7e9dc" }],
    },
  },
  args: {
    currentBalance: 921.48,
    weeklyExpenses,
    totalMonthlyCost: 478.33,
    lastMonthlyCost: 467,
  },
};
export default meta;

type Story = StoryObj<typeof ExpenseChart>;

export const Basic: Story = {
  args: {},
};
