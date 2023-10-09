import type { Meta, StoryObj } from "@storybook/react";
import { NewsHomepage } from "./NewsHomepage";

const meta: Meta<typeof NewsHomepage> = {
  component: NewsHomepage,
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

type Story = StoryObj<typeof NewsHomepage>;

export const Basic: Story = {
  args: {},
};
