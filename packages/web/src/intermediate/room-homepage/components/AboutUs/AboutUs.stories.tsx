import type { Meta, StoryObj } from "@storybook/react";
import { AboutUs } from "./AboutUs";

const meta: Meta<typeof AboutUs> = {
  component: AboutUs,
  parameters: {
    layout: "centered",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof AboutUs>;

export const Basic: Story = {
  args: {},
};
