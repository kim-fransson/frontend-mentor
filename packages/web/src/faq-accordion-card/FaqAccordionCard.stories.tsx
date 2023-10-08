import type { Meta, StoryObj } from "@storybook/react";
import { FaqAccordionCard } from "./FaqAccordionCard";

const meta: Meta<typeof FaqAccordionCard> = {
  component: FaqAccordionCard,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "frontend-mentor",
      values: [
        {
          name: "frontend-mentor",
          value: "rgba(102,98,229,1)",
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-no-repeat">
        <Story />
      </div>
    ),
  ],
  args: {},
};
export default meta;

type Story = StoryObj<typeof FaqAccordionCard>;

export const Basic: Story = {
  args: {},
};
