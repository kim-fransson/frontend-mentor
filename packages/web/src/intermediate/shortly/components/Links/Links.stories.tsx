import type { Meta, StoryObj } from "@storybook/react";
import { Links } from "./Links";

const meta: Meta<typeof Links> = {
  component: Links,
  parameters: {
    layout: "centered",
  },
  args: {
    links: [
      {
        originalUrl: "https://www.example.com/page1",
        shortenUrl: "https://short.url/abc123",
      },
      {
        originalUrl: "https://www.example.com/page2",
        shortenUrl: "https://short.url/def456",
      },
      {
        originalUrl: "https://www.example.com/page3",
        shortenUrl: "https://short.url/ghi789",
      },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Links>;

export const Basic: Story = {
  args: {},
};
