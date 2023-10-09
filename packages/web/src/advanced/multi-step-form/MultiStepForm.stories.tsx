import type { Meta, StoryObj } from "@storybook/react";
import { MultiStepForm } from "./MultiStepForm";

const meta: Meta<typeof MultiStepForm> = {
  component: MultiStepForm,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#eef5ff" }],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof MultiStepForm>;

export const Basic: Story = {
  args: {},
};
