import type { Meta, StoryObj } from "@storybook/react";
import { NewsList } from "./NewsList";

const meta: Meta<typeof NewsList> = {
  component: NewsList,
  parameters: {
    layout: "centered",
  },
  args: {
    title: "New",
    newsList: [
      {
        title: "Hydrogen VS Electric Cars",
        description: "Will hydrogen-fueled cars ever catch up to EVs?",
      },
      {
        title: "The Downsides of AI Artistry",
        description:
          "What are the possible adverse effects of on-demand AI image generation?",
      },
      {
        title: "Is VC Funding Drying Up?",
        description:
          "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof NewsList>;

export const Basic: Story = {
  args: {},
};
