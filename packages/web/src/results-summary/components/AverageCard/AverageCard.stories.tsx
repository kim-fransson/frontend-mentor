import type { Meta, StoryObj } from "@storybook/react";

import { AverageCard } from "./AverageCard";

const meta: Meta<typeof AverageCard> = {
  component: AverageCard,
  args: {},
};
export default meta;

type Story = StoryObj<typeof AverageCard>;

export const Basic: Story = {
  args: {
    title: "Your Result",
    totalScore: 100,
    scores: [80, 92, 61, 72],
  },
};
