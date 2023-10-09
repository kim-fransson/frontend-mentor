import type { Meta, StoryObj } from "@storybook/react";
import { PersonalInformationStep } from "./PersonalInformationStep";

const meta: Meta<typeof PersonalInformationStep> = {
  component: PersonalInformationStep,
  parameters: {
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#eef5ff" }],
    },
  },
  argTypes: {
    onNext: { action: "next step" },
  },
};
export default meta;

type Story = StoryObj<typeof PersonalInformationStep>;

export const Basic: Story = {
  args: {},
};
