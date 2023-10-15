import type { Meta, StoryObj } from "@storybook/react";
import { AdvancedStatistics } from "./AdvancedStatistics";

const meta: Meta<typeof AdvancedStatistics> = {
  component: AdvancedStatistics,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof AdvancedStatistics>;

export const Basic: Story = {
  args: {},
};
