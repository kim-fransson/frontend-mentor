import type { Meta, StoryObj } from "@storybook/react";
import BrandRecognition from "../../assets/icon-brand-recognition.svg?react";
import { AdvancedStatisticsCard } from "./AdvancedStatisticsCard";

const meta: Meta<typeof AdvancedStatisticsCard> = {
  component: AdvancedStatisticsCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "frontend-mentor",
      values: [{ name: "frontend-mentor", value: "#f0f0f0" }],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof AdvancedStatisticsCard>;

export const Basic: Story = {
  args: {
    icon: <BrandRecognition />,
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
  },
};
