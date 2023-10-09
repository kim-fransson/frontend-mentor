import type { Meta, StoryObj } from "@storybook/react";
import { PickAddonsStep } from "./PickAddonsStep";

const meta: Meta<typeof PickAddonsStep> = {
  component: PickAddonsStep,
  parameters: {
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#eef5ff" }],
    },
  },
  argTypes: {
    onNext: { action: "next step" },
    onBack: { action: "back" },
  },
};
export default meta;

type Story = StoryObj<typeof PickAddonsStep>;

export const Basic: Story = {
  args: {},
};
