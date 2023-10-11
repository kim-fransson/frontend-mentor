import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {
    onPress: {
      action: "pressed",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Small: Story = {
  args: {
    children: "Copy",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    children: "Get Started",
    size: "large",
  },
};
