import type { Meta, StoryObj } from "@storybook/react";
import { ExpenseChart } from "./ExpenseChart";

const meta: Meta<typeof ExpenseChart> = {
  component: ExpenseChart,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#f7e9dc" }],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof ExpenseChart>;

export const Basic: Story = {
  args: {},
};
