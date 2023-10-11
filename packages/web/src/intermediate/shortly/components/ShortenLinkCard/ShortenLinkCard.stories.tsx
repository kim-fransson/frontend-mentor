import type { Meta, StoryObj } from "@storybook/react";
import { ShortenLinkCard } from "./ShortenLinkCard";

const meta: Meta<typeof ShortenLinkCard> = {
  component: ShortenLinkCard,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {
    onShortenLink: {
      actions: "shorten link",
    },
  },
};
export default meta;

type Story = StoryObj<typeof ShortenLinkCard>;

export const Basic: Story = {
  args: {},
};
