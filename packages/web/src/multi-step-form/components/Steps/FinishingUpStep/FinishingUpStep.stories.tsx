import type { Meta, StoryObj } from "@storybook/react";
import { FinishingUpStep } from "./FinishingUpStep";
import { addons } from "@storybook/manager-api";

const meta: Meta<typeof FinishingUpStep> = {
  component: FinishingUpStep,
  parameters: {
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#eef5ff" }],
    },
  },
  argTypes: {
    onConfirm: { action: "confirm" },
    onChangePlan: { action: "change plan" },
    onBack: { action: "back" },
  },
  args: {
    selections: {
      addons: [
        {
          description: "Extra 1TB of cloud save",
          id: 1,
          monthlyPrice: 2,
          title: "Larger storage",
          yearlyPrice: 20,
        },
        {
          description: "Access to multiplayer games",
          id: 0,
          monthlyPrice: 1,
          title: "Online service",
          yearlyPrice: 10,
        },
      ],
      plan: {
        id: 0,
        monthlyPrice: 9,
        title: "arcade",
        yearlyPrice: 90,
        discountLabel: "2 months free",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof FinishingUpStep>;

export const Monthly: Story = {
  args: {
    interval: "monthly",
  },
};

export const Yearly: Story = {
  args: {
    interval: "yearly",
  },
};
