import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "./Navigation";

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  parameters: {
    layout: "centered",
  },
  args: {
    links: ["home", "shop", "about", "contact"],
  },
};
export default meta;

type Story = StoryObj<typeof Navigation>;

export const Basic: Story = {
  args: {},
};
