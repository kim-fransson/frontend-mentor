import type { Meta, StoryObj } from "@storybook/react";
import { Shortly } from "./Shortly";

const meta: Meta<typeof Shortly> = {
  component: Shortly,
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

type Story = StoryObj<typeof Shortly>;

export const Basic: Story = {
  args: {},
};
