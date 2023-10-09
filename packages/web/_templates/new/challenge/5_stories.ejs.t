---
to: src/<%= h.changeCase.lowerCase(difficulty) %>/<%= h.inflection.dasherize(challenge_name) %>/<%= h.changeCase.pascal(challenge_name) %>.stories.tsx
---
import type { Meta, StoryObj } from "@storybook/react";
import { <%= h.changeCase.pascal(challenge_name) %> } from "./<%= h.changeCase.pascal(challenge_name) %>";

const meta: Meta<typeof <%= h.changeCase.pascal(challenge_name) %>> = {
  component: <%= h.changeCase.pascal(challenge_name) %>,
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

type Story = StoryObj<typeof <%= h.changeCase.pascal(challenge_name) %>>;

export const Basic: Story = {
  args: {},
};
