import type { Meta, StoryObj } from "@storybook/react";
import { Bar } from "./Bar";

const meta: Meta<typeof Bar> = {
  component: Bar,
  parameters: {
    layout: "centered",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof Bar>;

export const Basic: Story = {
  args: {},
};
