import type { Meta, StoryObj } from "@storybook/react";
import { AddOnSelection } from "./AddOnSelection";

const meta: Meta<typeof AddOnSelection> = {
  component: AddOnSelection,
  args: {
    title: "Online service",
    description: "Access to multiplayer games",
  },
  argTypes: {
    onChange: { action: "selected" },
  },
};
export default meta;

type Story = StoryObj<typeof AddOnSelection>;

export const Monthly: Story = {
  args: {
    price: 1,
    interval: "monthly",
  },
};

export const Yearly: Story = {
  args: {
    price: 10,
    interval: "yearly",
  },
};
