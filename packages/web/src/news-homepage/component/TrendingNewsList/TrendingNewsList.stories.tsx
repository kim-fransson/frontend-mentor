import type { Meta, StoryObj } from "@storybook/react";
import { TrendingNewsList } from "./TrendingNewsList";

const meta: Meta<typeof TrendingNewsList> = {
  component: TrendingNewsList,
  parameters: {
    layout: "centered",
  },
  args: {
    trendingNewsList: [
      {
        title: "Reviving Retro PCs",
        description: "What happens when old PCs are given modern upgrades?",
        trendingScore: 354,
        image: "/images/image-retro-pcs.jpg",
      },
      {
        title: "The growth of gaming",
        description: "How the pandemic has sparked fresh opportunities.",
        trendingScore: 125,
        image: "/images/image-gaming-growth.jpg",
      },
      {
        title: "Top 10 laptops of 2022",
        description: "Our best picks for various needs and budgets.",
        trendingScore: 211,
        image: "/images/image-top-laptops.jpg",
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof TrendingNewsList>;

export const Basic: Story = {
  args: {},
};
