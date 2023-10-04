import type { Meta, StoryObj } from "@storybook/react";
import { QRComponent } from "./QRComponent";

const meta: Meta<typeof QRComponent> = {
  component: QRComponent,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#d6e1f0" }],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof QRComponent>;

export const Basic: Story = {
  args: {
    imageUrl: "/images/qr-code-component/image-qr-code.png",
    alt: "qr code to frontend mentor homepage",
    title: "Improve your front-end skills by building projects",
    text: "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
  },
};
