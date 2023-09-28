import type { Meta, StoryObj } from "@storybook/react";
import { NewsletterSignup } from "./NewsletterSignup";

const meta: Meta<typeof NewsletterSignup> = {
  component: NewsletterSignup,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#343549" }],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof NewsletterSignup>;

export const Basic: Story = {
  args: {},
};
