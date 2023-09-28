import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import ArrowIcon from "../../../assets/svg/icon-arrow.svg?react";

const meta: Meta<typeof Button> = {
  component: Button,
  args: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {},
};
