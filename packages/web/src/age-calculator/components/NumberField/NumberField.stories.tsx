import type { Meta, StoryObj } from "@storybook/react";
import { NumberField } from "./NumberField";

const meta: Meta<typeof NumberField> = {
  component: NumberField,
  args: {},
};
export default meta;

type Story = StoryObj<typeof NumberField>;

export const Basic: Story = {
  args: {
    label: "Age",
    defaultValue: 29,
  },
};

export const Focus: Story = {
  args: {
    label: "Age",
    defaultValue: 29,
    autoFocus: true,
  },
};

export const Placeholder: Story = {
  args: {
    label: "Age",
    placeholder: "Enter your age",
    autoFocus: true,
  },
};

export const Invalid: Story = {
  args: {
    label: "Age",
    errorMessage: "Age is required",
  },
};
