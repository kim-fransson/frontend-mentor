import type { Meta, StoryObj } from "@storybook/react";
import { DateForm } from "./DateForm";

const meta: Meta<typeof DateForm> = {
  component: DateForm,
  argTypes: {
    onSubmit: {
      action: "submit",
    },
  },
};
export default meta;

type Story = StoryObj<typeof DateForm>;

export const Basic: Story = {
  args: {},
};
