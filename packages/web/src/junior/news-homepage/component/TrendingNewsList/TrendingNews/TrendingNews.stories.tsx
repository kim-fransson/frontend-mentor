import type { Meta, StoryObj } from "@storybook/react";
import { TrendingNews } from "./TrendingNews";

const meta: Meta<typeof TrendingNews> = {
  component: TrendingNews,
  parameters: {
    layout: "centered",
  },
  args: {
    trendingNews: {
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
      trendingScore: 354,
      image: "/images/news-homepage/image-retro-pcs.jpg",
    },
    position: 1,
  },
};
export default meta;

type Story = StoryObj<typeof TrendingNews>;

export const Basic: Story = {
  args: {},
};
