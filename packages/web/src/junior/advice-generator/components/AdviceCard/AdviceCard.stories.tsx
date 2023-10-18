import type { Meta, StoryObj } from "@storybook/react";
import { AdviceCard } from "./AdviceCard";

const meta: Meta<typeof AdviceCard> = {
  component: AdviceCard,
  parameters: {
    layout: "centered",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof AdviceCard>;

export const Basic: Story = {
  args: {
    advice: {
      id: 117,
      advice:
        "It is easy to sit up and take notice, what's difficult is getting up and taking action",
    },
  },
};

export const Long: Story = {
  args: {
    advice: {
      id: 999,
      advice:
        "Begin by embarking on a journey of self-discovery. Understand your strengths, weaknesses, desires, and values. Self-awareness is the cornerstone of personal growth. As you peel back the layers of your identity, you'll uncover your true passions and purposes in life.",
    },
  },
};
