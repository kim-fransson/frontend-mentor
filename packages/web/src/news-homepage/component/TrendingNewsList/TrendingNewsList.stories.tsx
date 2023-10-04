import type { Meta, StoryObj } from "@storybook/react";
import { TrendingNewsList } from "./TrendingNewsList";

const meta: Meta<typeof TrendingNewsList> = {
  component: TrendingNewsList,
  parameters: {
    layout: "centered",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof TrendingNewsList>;

export const Basic: Story = {
  args: {},
};
