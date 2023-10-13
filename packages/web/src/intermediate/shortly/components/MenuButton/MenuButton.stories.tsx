import type { Meta, StoryObj } from "@storybook/react";
import { MenuButton } from "./MenuButton";
import { Item, Section } from "react-stately";

const meta: Meta<typeof MenuButton> = {
  component: MenuButton,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
  decorators: [
    (Story) => (
      <div className="flex justify-end p-0">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MenuButton>;

export const Basic: Story = {
  args: {},
  render: () => (
    <MenuButton onAction={(key) => alert(key)}>
      <Section>
        <Item key="features">Features</Item>
        <Item key="pricing">Pricing</Item>
        <Item key="resources">Resources</Item>
      </Section>
      <Section>
        <Item key="login">Login</Item>
        <Item key="sign-up">Sign Up</Item>
      </Section>
    </MenuButton>
  ),
};
