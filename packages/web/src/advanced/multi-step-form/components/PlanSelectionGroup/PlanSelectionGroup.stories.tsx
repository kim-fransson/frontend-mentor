import type { Meta, StoryObj } from "@storybook/react";
import { PlanSelectionGroup } from "./PlanSelectionGroup";

const meta: Meta<typeof PlanSelectionGroup> = {
  component: PlanSelectionGroup,
  argTypes: {
    onChange: { action: "plan selected" },
  },
};
export default meta;

type Story = StoryObj<typeof PlanSelectionGroup>;

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
