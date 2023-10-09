import type { Meta, StoryObj } from "@storybook/react";
import { NewsContent } from "./NewsContent";

const meta: Meta<typeof NewsContent> = {
  component: NewsContent,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof NewsContent>;

export const Basic: Story = {
  args: {},
};
