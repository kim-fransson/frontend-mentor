import type { Meta, StoryObj } from "@storybook/react";
import { Disclosure } from "./Disclosure";

const meta: Meta<typeof Disclosure> = {
  component: Disclosure,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof Disclosure>;

export const Basic: Story = {
  args: {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
};
