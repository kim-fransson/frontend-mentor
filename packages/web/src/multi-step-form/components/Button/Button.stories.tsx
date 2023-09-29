import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  args: {},
  argTypes: {
    onPress: { action: "pressed" },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

const ButtonGroup = (args: ButtonProps) => {
  return (
    <div className="flex gap-4 items-center">
      <Button {...args}>{args.variant}</Button>
      <Button {...args} isDisabled>
        disabled
      </Button>
    </div>
  );
};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  render: (args) => <ButtonGroup {...args} />,
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  render: (args) => <ButtonGroup {...args} />,
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
  render: (args) => <ButtonGroup {...args} />,
};

export const Link: Story = {
  args: {
    variant: "link",
  },
  render: (args) => <ButtonGroup {...args} />,
};
