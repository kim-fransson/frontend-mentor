import type { Meta, StoryObj } from "@storybook/react";
import { Notification } from "./Notification";
import { notifications } from "../../notifications";

const meta: Meta<typeof Notification> = {
  component: Notification,
  parameters: {
    layout: "centered",
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof Notification>;

export const RecentPostNotification: Story = {
  args: {
    notification: notifications[0],
  },
};

export const NewFollowerNotification: Story = {
  args: {
    notification: notifications[1],
  },
};

export const JoinedGroupNotification: Story = {
  args: {
    notification: notifications[2],
  },
};

export const PrivateMessageNotification: Story = {
  args: {
    notification: notifications[3],
  },
};

export const PictureCommentNotification: Story = {
  args: {
    notification: notifications[4],
  },
};

export const LeftGroupNotification: Story = {
  args: {
    notification: notifications[6],
  },
};
