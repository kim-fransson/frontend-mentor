import type { Meta, StoryObj } from "@storybook/react";
import { ShopNowButton } from "./ShopNowButton";

const meta: Meta<typeof ShopNowButton> = {
  component: ShopNowButton,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {
    onShopNow: {
      action: "onShopNow",
    },
  },
};
export default meta;

type Story = StoryObj<typeof ShopNowButton>;

export const Basic: Story = {
  args: {},
};
