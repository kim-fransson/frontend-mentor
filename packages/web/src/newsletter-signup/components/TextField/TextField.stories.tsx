import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  component: TextField,
  args: {
    placeholder: "email@company.com",
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Basic: Story = {
  args: {},
};

export const Label: Story = {
  args: {
    label: "Email Address",
  },
};

export const ErrorMessage: Story = {
  args: {
    label: "Email Address",
    errorMessage: "Valid email required",
    defaultValue: "email#company.com",
  },
};
