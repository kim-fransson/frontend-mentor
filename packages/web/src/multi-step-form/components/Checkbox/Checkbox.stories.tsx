import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: {},
  argTypes: {
    onChange: { action: "changed" },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  args: {},
};
