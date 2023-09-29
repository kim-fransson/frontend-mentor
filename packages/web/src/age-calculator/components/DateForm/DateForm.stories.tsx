import type { Meta, StoryObj } from "@storybook/react";
import { DateForm } from "./DateForm";

const meta: Meta<typeof DateForm> = {
  component: DateForm,
  args: {
    onSubmit: (date) => {
      console.log(date);
    },
  },
  argTypes: { onSubmit: { action: "subscribe" } },
};
export default meta;

type Story = StoryObj<typeof DateForm>;

export const Basic: Story = {
  args: {},
};
