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
          value: "#ad68e9",
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="mt-40">
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
