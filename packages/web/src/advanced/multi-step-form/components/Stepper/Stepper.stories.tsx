import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "./Stepper";

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  parameters: {
    backgrounds: {
      default: "blue",
      values: [{ name: "blue", value: "#483cfe" }],
    },
  },
  args: {
    activeStep: 3,
    steps: ["your info", "select plan", "add-ons", "summary"],
  },
};
export default meta;

type Story = StoryObj<typeof Stepper>;

export const Basic: Story = {
  args: {},
};
