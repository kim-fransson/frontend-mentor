import type { Meta, StoryObj } from "@storybook/react";
import { AddOnSelectionGroup } from "./AddOnSelectionGroup";

const meta: Meta<typeof AddOnSelectionGroup> = {
  component: AddOnSelectionGroup,
  argTypes: {
    onChange: { action: "addon selected" },
  },
};
export default meta;

type Story = StoryObj<typeof AddOnSelectionGroup>;

export const Monthly: Story = {
  args: {
    interval: "monthly",
  },
};

export const Yearly: Story = {
  args: {
    interval: "yearly",
  },
};
