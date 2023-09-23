import type { Meta, StoryObj } from "@storybook/react";
import { NewsletterSignup } from "./NewsletterSignup";

const meta: Meta<typeof NewsletterSignup> = {
  component: NewsletterSignup,
  args: {},
};
export default meta;

type Story = StoryObj<typeof NewsletterSignup>;

export const Basic: Story = {
  args: {
    imageUrl: "/images/image-qr-code.png",
    alt: "qr code to frontend mentor homepage",
    title: "Improve your front-end skills by building projects",
    text: "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
  },
};
