import type { Meta, StoryObj } from "@storybook/react";
import { NewsHomePage } from "./NewsHomePage";

const meta: Meta<typeof NewsHomePage> = {
  component: NewsHomePage,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#f0f0f0" }],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof NewsHomePage>;

export const Basic: Story = {
  args: {},
};
