import type { Meta, StoryObj } from "@storybook/react";
import { ExpenseChart } from "./ExpenseChart";

const meta: Meta<typeof ExpenseChart> = {
  component: ExpenseChart,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#f0f0f0" }],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof ExpenseChart>;

export const Basic: Story = {
  args: {},
};
