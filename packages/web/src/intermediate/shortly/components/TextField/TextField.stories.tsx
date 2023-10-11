import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  component: TextField,
  parameters: {
    layout: "centered",
  },
  args: {
    "aria-label": "write the link to shorten",
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Basic: Story = {
  args: {
    placeholder: "Shorten a link here...",
  },
};

export const Invalid: Story = {
  args: {
    placeholder: "Shorten a link here...",
    isInvalid: true,
    errorMessage: "Please add a link",
  },
};
