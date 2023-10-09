import type { Meta, StoryObj } from "@storybook/react";
import { IntervalSwitch } from "./IntervalSwitch";

const meta: Meta<typeof IntervalSwitch> = {
  component: IntervalSwitch,
  args: {},
  argTypes: {
    onChange: { action: "interval switched" },
  },
};
export default meta;

type Story = StoryObj<typeof IntervalSwitch>;

export const Basic: Story = {
  args: {},
};
