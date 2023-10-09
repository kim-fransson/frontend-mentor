import { twMerge } from "tailwind-merge";
import { Notification as INotification } from "../../env";

export interface NotificationProps {
  notification: INotification;
}

const typeToActionText = {
  "post-reaction": "reacted to your recent post",
  "new-follower": "followed you",
  "joined-group": "has joined your group",
  "private-message": "sent you a private message",
  "picture-comment": "commented on your picture",
  "left-group": "left the group",
};

const formatDateDifference = (inputDate: Date) => {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - inputDate.getTime();

  // Calculate the time units
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks >= 1) {
    return `${weeks === 1 ? "1 week" : `${weeks} weeks`} ago`;
  } else if (days >= 1) {
    return `${days === 1 ? "1 day" : `${days} days`} ago`;
  } else if (hours >= 1) {
    return `${hours}h ago`;
  } else if (minutes >= 1) {
    return `${minutes}m ago`;
  } else {
    return `${seconds}s ago`;
  }
};

export const Notification = ({ notification }: NotificationProps) => {
  const { hasRead, actor, type, timestamp } = notification;

  return (
    <div
      className={twMerge(
        "flex gap-4",
        "rounded-md p-3 cursor-pointer",
        "hover:bg-blue-50 transition-all duration-300 ease-in-out"
      )}
    >
      <img className="self-start max-w-[3rem]" src={actor.img} alt="avatar" />
      <div>
        <div className="leading-3">
          <span className="font-semibold tracking-tight">{actor.name}</span>{" "}
          <span className="text-gray-600 text-sm">
            {typeToActionText[type]}
          </span>{" "}
          <span
            className={twMerge(
              "text-sm text-gray-700 font-bold tracking-tight",
              "hover:text-blue-700 transition-all duration-300 ease-in-out"
            )}
          >
            {type === "post-reaction"
              ? notification.post.title
              : type === "joined-group" || type === "left-group"
              ? notification.group.name
              : null}
          </span>
          {!hasRead && (
            <div
              className={"rounded-full bg-red-600 h-2 w-2 inline-block ml-1"}
            />
          )}
        </div>

        <span className="text-sm text-gray-500 w-full -mt-3 col-start-2">
          {formatDateDifference(timestamp)}
        </span>
        {type === "private-message" && (
          <p className="mt-2 tracking-tight text-gray-500 leading-4 text-sm p-3 border border-gray-200 rounded-md">
            {notification.message}
          </p>
        )}
      </div>
      {type === "picture-comment" && (
        <img
          className="max-w-[2.5rem] self-start"
          src={notification.picture.thumbnail}
          alt="thumbnail of commented picture"
        />
      )}
    </div>
  );
};
