import type { Meta, StoryObj } from "@storybook/react";
import { SummaryCard } from "./SummaryCard";

const meta: Meta<typeof SummaryCard> = {
  component: SummaryCard,
  args: {
    title: "Summary",
  },
  argTypes: { onContinue: { action: "continue" } },
};
export default meta;

type Story = StoryObj<typeof SummaryCard>;

export const Basic: Story = {
  args: {
    summaryList: [
      {
        category: "Reaction",
        score: 80,
      },
      {
        category: "Memory",
        score: 92,
      },
      {
        category: "Verbal",
        score: 61,
      },
      {
        category: "Visual",
        score: 72,
      },
    ],
  },
};
