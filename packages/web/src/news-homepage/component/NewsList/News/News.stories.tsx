import type { Meta, StoryObj } from "@storybook/react";
import { News } from "./News";

const meta: Meta<typeof News> = {
  component: News,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#0e1111" }],
    },
  },
  args: {
    news: {
      title: "Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
  },
};
export default meta;

type Story = StoryObj<typeof News>;

export const Basic: Story = {
  args: {},
};
