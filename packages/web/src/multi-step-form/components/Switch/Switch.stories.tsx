import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  component: Switch,
  args: {
    "aria-label": "Switch",
  },
  argTypes: {
    onChange: { action: "switch" },
  },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  args: {},
};
