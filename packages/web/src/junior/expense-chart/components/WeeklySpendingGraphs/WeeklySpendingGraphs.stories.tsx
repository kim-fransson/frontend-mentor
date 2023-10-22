import type { Meta, StoryObj } from "@storybook/react";
import { WeeklySpendingGraphs } from "./WeeklySpendingGraphs";
import { weeklyExpenses } from "../../data";

const meta: Meta<typeof WeeklySpendingGraphs> = {
  component: WeeklySpendingGraphs,
  parameters: {
    layout: "centered",
  },
  args: {
    weeklyExpenses,
  },
};
export default meta;

type Story = StoryObj<typeof WeeklySpendingGraphs>;

export const Basic: Story = {
  args: {},
};
