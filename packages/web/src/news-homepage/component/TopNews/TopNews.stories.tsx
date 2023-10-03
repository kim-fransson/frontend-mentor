import type { Meta, StoryObj } from "@storybook/react";
import { TopNews } from "./TopNews";

const meta: Meta<typeof TopNews> = {
  component: TopNews,
  parameters: {
    layout: "centered",
  },
  args: {
    topNews: {
      title: "The Bright Future of Web 3.0?",
      description:
        "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
      image: {
        mobile: "/images/image-web-3-mobile.jpg",
        desktop: "/images/image-web-3-desktop.jpg",
      },
    },
  },
  argTypes: {
    onReadMore: { actions: "readMore" },
  },
};
export default meta;

type Story = StoryObj<typeof TopNews>;

export const Basic: Story = {
  args: {},
};
