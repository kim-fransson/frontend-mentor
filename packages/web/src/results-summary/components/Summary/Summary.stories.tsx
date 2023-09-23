import type { Meta, StoryObj } from "@storybook/react";
import { Summary } from "./Summary";

import ReactionIcon from "../../../assets/svg/icon-reaction.svg?react";
import MemoryIcon from "../../../assets/svg/icon-memory.svg?react";
import VerbalIcon from "../../../assets/svg/icon-verbal.svg?react";
import VisualIcon from "../../../assets/svg/icon-visual.svg?react";

const meta: Meta<typeof Summary> = {
  component: Summary,
  args: {
    totalPoints: 100,
  },
};
export default meta;

type Story = StoryObj<typeof Summary>;

export const Reaction: Story = {
  args: {
    color: "red",
    icon: <ReactionIcon />,
    title: "reaction",
    points: 80,
  },
};

export const Memory: Story = {
  args: {
    color: "yellow",
    icon: <MemoryIcon />,
    title: "memory",
    points: 92,
  },
};

export const Verbal: Story = {
  args: {
    color: "green",
    icon: <VerbalIcon />,
    title: "verbal",
    points: 61,
  },
};

export const Visual: Story = {
  args: {
    color: "blue",
    icon: <VisualIcon />,
    title: "visual",
    points: 72,
  },
};
