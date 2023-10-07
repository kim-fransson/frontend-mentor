import { Notification } from "./env";

const generateTimeToMathDiff = (diffInSeconds: number): Date => {
  const currentTimestamp = new Date().getTime();
  const diffMilliseconds = diffInSeconds * 1000;
  const newTimestamp = currentTimestamp - diffMilliseconds;
  return new Date(newTimestamp);
};

export const notifications: Notification[] = [
  {
    actor: {
      img: "/images/notifications-page/avatar-mark-webber.webp",
      name: "Mark Webber",
    },
    type: "post-reaction",
    post: { title: "My first tournament today!" },
    timestamp: generateTimeToMathDiff(60), // 1m ago
    hasRead: false,
  },
  {
    actor: {
      img: "/images/notifications-page/avatar-angela-gray.webp",
      name: "Angela Gray",
    },
    type: "new-follower",
    timestamp: generateTimeToMathDiff(300), // 3m ago
    hasRead: false,
  },
  {
    actor: {
      img: "/images/notifications-page/avatar-jacob-thompson.webp",
      name: "Jacob Thompson",
    },
    type: "joined-group",
    group: { name: "Chess Club" },
    timestamp: generateTimeToMathDiff(86400), // 1 day ago
    hasRead: false,
  },
  {
    actor: {
      img: "/images/notifications-page/avatar-rizky-hasanuddin.webp",
      name: "Rizky Hasanuddin",
    },
    type: "private-message",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    timestamp: generateTimeToMathDiff(432000), // 5 days ago
    hasRead: true,
  },
  {
    actor: {
      img: "/images/notifications-page/avatar-kimberly-smith.webp",
      name: "Kimberly Smith",
    },
    type: "picture-comment",
    picture: { thumbnail: "/images/notifications-page/image-chess.webp" },
    timestamp: generateTimeToMathDiff(604800), // 1 week ago
    hasRead: true,
  },
  {
    actor: {
      img: "/images/notifications-page/avatar-nathan-peterson.webp",
      name: "Nathan Peterson",
    },
    type: "post-reaction",
    post: { title: "5 end-game strategies to increase your win rate" },
    timestamp: generateTimeToMathDiff(1209600),
    hasRead: true,
  },
  {
    actor: {
      img: "/images/notifications-page/avatar-anna-kim.webp",
      name: "Anna Kim",
    },
    type: "left-group",
    group: { name: "Chess Club" },
    timestamp: generateTimeToMathDiff(1209600),
    hasRead: true,
  },
];
