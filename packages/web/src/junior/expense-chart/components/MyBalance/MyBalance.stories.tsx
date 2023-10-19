import type { Meta, StoryObj } from "@storybook/react";
import { MyBalance } from "./MyBalance";

const meta: Meta<typeof MyBalance> = {
  component: MyBalance,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    balance: 921.48,
  },
};
export default meta;

type Story = StoryObj<typeof MyBalance>;

export const Basic: Story = {
  args: {},
};
