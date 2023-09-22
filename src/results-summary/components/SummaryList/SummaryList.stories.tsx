import type { Meta, StoryObj } from "@storybook/react";
import { SummaryList } from "./SummaryList";

const meta: Meta<typeof SummaryList> = {
  component: SummaryList,
  args: {},
};
export default meta;

type Story = StoryObj<typeof SummaryList>;

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
