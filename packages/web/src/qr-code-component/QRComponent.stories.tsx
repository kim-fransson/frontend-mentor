import type { Meta, StoryObj } from "@storybook/react";
import { QRComponent } from "./QRComponent";

const meta: Meta<typeof QRComponent> = {
  component: QRComponent,
  args: {
    totalScore: 100,
  },
  argTypes: { onContinue: { action: "continue" } },
};
export default meta;

type Story = StoryObj<typeof QRComponent>;

export const Basic: Story = {
  args: {},
};
