import type { Meta, StoryObj } from "@storybook/react";
import { Step } from "./Step";

const meta: Meta<typeof Step> = {
  component: Step,
  parameters: {
    backgrounds: {
      default: "blue",
      values: [{ name: "blue", value: "#483cfe" }],
    },
  },
  args: {
    order: 1,
    active: false,
    title: "your info",
  },
};
export default meta;

type Story = StoryObj<typeof Step>;

export const Basic: Story = {
  args: {},
};

export const Active: Story = {
  args: {
    active: true,
  },
};
