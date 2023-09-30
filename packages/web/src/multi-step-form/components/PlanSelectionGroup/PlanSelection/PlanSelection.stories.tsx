import type { Meta, StoryObj } from "@storybook/react";
import { PlanSelection } from "./PlanSelection";

const meta: Meta<typeof PlanSelection> = {
  component: PlanSelection,
  args: {},
  argTypes: {
    onChange: { action: "selected" },
  },
};
export default meta;

type Story = StoryObj<typeof PlanSelection>;

export const Monthly: Story = {
  args: {
    icon: "/svg/icon-arcade.svg",
    title: "Arcade",
    price: 9,
    interval: "monthly",
  },
};

export const Yearly: Story = {
  args: {
    icon: "/svg/icon-arcade.svg",
    title: "Arcade",
    price: 90,
    interval: "yearly",
    discountLabel: "2 months free",
  },
};
