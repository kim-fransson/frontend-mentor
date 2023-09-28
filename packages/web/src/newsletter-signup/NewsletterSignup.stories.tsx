import type { Meta, StoryObj } from "@storybook/react";
import { NewsletterSignup, NewsletterSignupProps } from "./NewsletterSignup";
import { useState } from "react";
import { SignupSuccess } from "./components/SignupSuccess/SignupSuccess";

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

const NewsletterSignupExample = (args: NewsletterSignupProps) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState("");

  return !showSuccess ? (
    <NewsletterSignup
      {...args}
      onSubscribe={(email) => {
        setEmail(email);
        setShowSuccess(true);
      }}
    />
  ) : (
    <SignupSuccess
      title="Thanks for subscribing!"
      email={email}
      onDismiss={() => setShowSuccess(false)}
    />
  );
};

export const Basic: Story = {
  args: {},
  render: (args) => <NewsletterSignupExample {...args} />,
};
