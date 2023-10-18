import type { Meta, StoryObj } from "@storybook/react";
import { AdviceGenerator } from "./AdviceGenerator";

const meta: Meta<typeof AdviceGenerator> = {
  component: AdviceGenerator,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#202632" }],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof AdviceGenerator>;

export const Basic: Story = {
  args: {},
};
