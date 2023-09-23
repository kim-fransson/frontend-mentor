import type { Meta, StoryObj } from "@storybook/react";

import { EmailForm } from "./EmailForm";

const meta: Meta<typeof EmailForm> = {
  component: EmailForm,
  args: {},
  argTypes: { onSubscribe: { action: "subscribe" } },
};
export default meta;

type Story = StoryObj<typeof EmailForm>;

export const Basic: Story = {
  args: {},
};
