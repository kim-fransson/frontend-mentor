import type { Meta, StoryObj } from "@storybook/react";
import { MonthlySummary } from "./MonthlySummary";

const meta: Meta<typeof MonthlySummary> = {
  component: MonthlySummary,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof MonthlySummary>;

export const Positive: Story = {
  args: {
    totalMonthlyCost: 478.33,
    lastMonthlyCost: 466.03,
  },
};

export const Negative: Story = {
  args: {
    totalMonthlyCost: 466.03,
    lastMonthlyCost: 478.33,
  },
};
