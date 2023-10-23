import type { Meta, StoryObj } from "@storybook/react";
import { RoomHomepage } from "./RoomHomepage";

const meta: Meta<typeof RoomHomepage> = {
  component: RoomHomepage,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#f0f0f0" }],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof RoomHomepage>;

export const Basic: Story = {
  args: {},
};
