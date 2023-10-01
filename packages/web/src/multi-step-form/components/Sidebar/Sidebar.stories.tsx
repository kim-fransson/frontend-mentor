import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  args: {
    activeStep: 3,
    steps: ["your info", "select plan", "add-ons", "summary"],
  },
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Basic: Story = {
  args: {},
};
