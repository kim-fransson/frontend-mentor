import type { Meta, StoryObj } from "@storybook/react";

import { SignupSuccess } from "./SignupSuccess";

const meta: Meta<typeof SignupSuccess> = {
  component: SignupSuccess,
  args: {
    title: "Thanks for subscribing!",
  },
  argTypes: { onDismiss: { action: "dismiss" } },
};
export default meta;

type Story = StoryObj<typeof SignupSuccess>;

export const Basic: Story = {
  args: {},
};
