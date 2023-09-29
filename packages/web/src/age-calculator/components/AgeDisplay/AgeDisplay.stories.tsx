import type { Meta, StoryObj } from "@storybook/react";
import { AgeDisplay } from "./AgeDisplay";

const meta: Meta<typeof AgeDisplay> = {
  component: AgeDisplay,
  args: {
    birthDate: new Date("1994-01-15"),
  },
};
export default meta;

type Story = StoryObj<typeof AgeDisplay>;

export const Basic: Story = {
  args: {},
};

export const BirthdateUndefined: Story = {
  args: {
    birthDate: undefined,
  },
};
