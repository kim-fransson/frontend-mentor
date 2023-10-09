import type { Meta, StoryObj } from "@storybook/react";
import { DateForm } from "./DateForm";

const meta: Meta<typeof DateForm> = {
  component: DateForm,
  args: {},
  argTypes: { onSubmit: { action: "date" } },
};
export default meta;

type Story = StoryObj<typeof DateForm>;

export const Basic: Story = {
  args: {},
};
