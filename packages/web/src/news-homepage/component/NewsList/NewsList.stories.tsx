import type { Meta, StoryObj } from "@storybook/react";
import { NewsList } from "./NewsList";

const meta: Meta<typeof NewsList> = {
  component: NewsList,
  parameters: {
    layout: "centered",
  },
  args: {
    title: "New",
  },
};
export default meta;

type Story = StoryObj<typeof NewsList>;

export const Basic: Story = {
  args: {},
};
