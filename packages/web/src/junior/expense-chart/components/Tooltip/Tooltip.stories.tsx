import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    tooltip: "tooltip",
    children: (
      <div className="border-dashed border border-orange-400 p-1">hover me</div>
    ),
  },
};
