import type { Meta, StoryObj } from "@storybook/react";

import { AverageDisplay } from "./AverageDisplay";

const meta: Meta<typeof AverageDisplay> = {
  component: AverageDisplay,
  args: {},
};
export default meta;

type Story = StoryObj<typeof AverageDisplay>;

export const Basic: Story = {
  args: {
    totalScore: 100,
    scores: [80, 92, 61, 72],
  },
};
