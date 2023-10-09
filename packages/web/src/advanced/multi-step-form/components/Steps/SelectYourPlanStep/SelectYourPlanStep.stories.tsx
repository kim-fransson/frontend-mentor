import type { Meta, StoryObj } from "@storybook/react";
import { SelectYourPlanStep } from "./SelectYourPlanStep";

const meta: Meta<typeof SelectYourPlanStep> = {
  component: SelectYourPlanStep,
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

type Story = StoryObj<typeof SelectYourPlanStep>;

export const Basic: Story = {
  args: {},
};
