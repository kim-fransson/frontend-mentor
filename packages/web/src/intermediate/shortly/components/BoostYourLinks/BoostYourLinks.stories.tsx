import type { Meta, StoryObj } from "@storybook/react";
import { BoostYourLinks } from "./BoostYourLinks";

const meta: Meta<typeof BoostYourLinks> = {
  component: BoostYourLinks,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof BoostYourLinks>;

export const Basic: Story = {
  args: {},
};
