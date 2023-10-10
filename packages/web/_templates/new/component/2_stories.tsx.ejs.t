---
to: src/<%= h.changeCase.lowerCase(difficulty) %>/<%= h.inflection.dasherize(challenge_name) %>/components/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.stories.tsx
---
import type { Meta, StoryObj } from "@storybook/react";
import { <%= h.changeCase.pascal(component_name) %> } from "./<%= h.changeCase.pascal(component_name) %>";

const meta: Meta<typeof <%= h.changeCase.pascal(component_name) %>> = {
  component: <%= h.changeCase.pascal(component_name) %>,
  parameters: {
    layout: "centered",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof <%= h.changeCase.pascal(component_name) %>>;

export const Basic: Story = {
  args: {},
};
