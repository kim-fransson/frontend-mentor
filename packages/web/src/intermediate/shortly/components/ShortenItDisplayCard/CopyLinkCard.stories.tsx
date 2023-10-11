import type { Meta, StoryObj } from "@storybook/react";
import { CopyLinkCard } from "./CopyLinkCard";

const meta: Meta<typeof CopyLinkCard> = {
  component: CopyLinkCard,
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

type Story = StoryObj<typeof CopyLinkCard>;

export const Basic: Story = {
  args: {},
};
