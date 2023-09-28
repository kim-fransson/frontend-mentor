import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  component: TextField,
  args: {},
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Basic: Story = {
  args: {
    label: "Age",
    defaultValue: "29",
  },
};

export const Focus: Story = {
  args: {
    label: "Age",
    defaultValue: "29",
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
    isInvalid: true,
  },
};
