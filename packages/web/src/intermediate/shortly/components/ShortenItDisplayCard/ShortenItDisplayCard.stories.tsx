import type { Meta, StoryObj } from "@storybook/react";
import { ShortenItDisplayCard } from "./ShortenItDisplayCard";

const meta: Meta<typeof ShortenItDisplayCard> = {
  component: ShortenItDisplayCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#f0f0f0" }],
    },
  },
  args: {
    originalUrl: "https://www.frontendmentor.io",
    shortenUrl: "https://rel.ink/k4lKyk",
  },
};
export default meta;

type Story = StoryObj<typeof ShortenItDisplayCard>;

export const Basic: Story = {
  args: {},
};
