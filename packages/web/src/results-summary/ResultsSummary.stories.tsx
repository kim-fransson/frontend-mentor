import type { Meta, StoryObj } from "@storybook/react";
import { ResultsSummary } from "./ResultsSummary";

const meta: Meta<typeof ResultsSummary> = {
  component: ResultsSummary,
  args: {
    totalScore: 100,
  },
  argTypes: { onContinue: { action: "continue" } },
};
export default meta;

type Story = StoryObj<typeof ResultsSummary>;

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
