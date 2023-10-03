import type { Meta, StoryObj } from "@storybook/react";
import { TopNews } from "./TopNews";

const meta: Meta<typeof TopNews> = {
  component: TopNews,
  parameters: {
    layout: "centered",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof TopNews>;

export const Basic: Story = {
  args: {},
};
