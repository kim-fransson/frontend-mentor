import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "./Navigation";

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof Navigation>;

export const Basic: Story = {
  args: {},
};
