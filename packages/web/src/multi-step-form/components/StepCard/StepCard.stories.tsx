import type { Meta, StoryObj } from "@storybook/react";
import { StepCard } from "./StepCard";

const meta: Meta<typeof StepCard> = {
  component: StepCard,
  parameters: {
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#eef5ff" }],
    },
  },
};
export default meta;

type Story = StoryObj<typeof StepCard>;

export const Basic: Story = {
  args: {
    title: "Title",
    description: "Short description what this card contains.",
    children: (
      <div className="border rounded-lg flex items-center justify-center border-dashed border-violet-700 h-80">
        Custom content
      </div>
    ),
  },
  argTypes: {
    onBack: { action: "back" },
    onNext: { action: "next" },
  },
};

export const Confirm: Story = {
  args: {
    title: "Title",
    description: "Short description what this card contains.",
    children: (
      <div className="border rounded-lg flex items-center justify-center border-dashed border-violet-700 h-80">
        Custom content
      </div>
    ),
    onNextButtonLabel: "Confirm",
    onNextButtonVariant: "secondary",
  },
  argTypes: {
    onBack: { action: "back" },
    onNext: { action: "confirm" },
  },
};

export const Minimum: Story = {
  args: {
    children: (
      <div className="border rounded-lg flex items-center justify-center border-dashed border-violet-700 h-80">
        Custom content
      </div>
    ),
  },
};
