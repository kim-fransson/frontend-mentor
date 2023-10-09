import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  component: TextField,
  args: {},
  argTypes: {
    onChange: { action: "value changed" },
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Basic: Story = {
  args: {
    label: "Name",
    defaultValue: "Kim Fransson",
  },
};

export const Focus: Story = {
  args: {
    label: "Name",
    defaultValue: "Kim Fransson",
    autoFocus: true,
  },
};

export const Placeholder: Story = {
  args: {
    label: "Name",
    placeholder: "e.g. Stephen King",
  },
};

export const Invalid: Story = {
  args: {
    label: "Name",
    placeholder: "e.g. Stephen King",
    errorMessage: "Name is required",
    isInvalid: true,
  },
};
