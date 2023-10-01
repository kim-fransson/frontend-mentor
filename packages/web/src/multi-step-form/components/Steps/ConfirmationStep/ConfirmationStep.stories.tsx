import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmationStep } from "./ConfirmationStep";

const meta: Meta<typeof ConfirmationStep> = {
  component: ConfirmationStep,
  parameters: {
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#eef5ff" }],
    },
  },
};
export default meta;

type Story = StoryObj<typeof ConfirmationStep>;

export const Basic: Story = {
  args: {},
};
