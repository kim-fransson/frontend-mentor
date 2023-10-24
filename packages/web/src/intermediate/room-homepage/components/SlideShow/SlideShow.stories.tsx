import type { Meta, StoryObj } from "@storybook/react";
import { SlideShow } from "./SlideShow";
import { slides } from "../../slides";

const meta: Meta<typeof SlideShow> = {
  component: SlideShow,
  parameters: {
    layout: "centered",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof SlideShow>;

export const Basic: Story = {
  args: {
    images: slides.map((slide) => slide.image),
  },
};
