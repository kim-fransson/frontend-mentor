import type { Meta, StoryObj } from "@storybook/react";
import { AgeCalculator } from "./AgeCalculator";

const meta: Meta<typeof AgeCalculator> = {
  component: AgeCalculator,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#f0f0f0" }],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof AgeCalculator>;

export const Basic: Story = {
  args: {},
};
