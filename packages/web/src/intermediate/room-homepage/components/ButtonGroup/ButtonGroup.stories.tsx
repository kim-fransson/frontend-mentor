import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {
    onClickLeft: {
      actions: "onClickLeft",
    },
    onClickRight: {
      actions: "onClickRight",
    },
  },
};
export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Basic: Story = {
  args: {},
};
