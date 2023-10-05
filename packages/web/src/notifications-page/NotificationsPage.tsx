import { useMemo, useRef } from "react";
import { notifications } from "./notifications";
import { twMerge } from "tailwind-merge";
import { AriaButtonProps, mergeProps, useButton } from "react-aria";

export interface NotificationsPageProps {}

const Button = (props: AriaButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  return (
    <button
      {...mergeProps(buttonProps)}
      ref={ref}
      className={twMerge(
        "ml-auto tracking-wide text-sm select-none text-gray-500 font-medium outline-none",
        "hover:text-blue-700 transition-all duration-200",
        isPressed && "scale-95",
        "focus-visible:text-blue-700"
      )}
    >
      {props.children}
    </button>
  );
};

export const NotificationsPage = (props: NotificationsPageProps) => {
  const memoizedNotifications = useMemo(() => notifications, []);

  const unreadNotifications = memoizedNotifications.filter(
    (notification) => !notification.hasRead
  );

  console.log(memoizedNotifications);
  return (
    <div className={twMerge("p-4 font-plus-jakarta-sans")}>
      <div className="flex gap-2 items-center mb-4">
        <h2 className="font-extrabold text-xl text-gray-900">Notifications</h2>
        <span
          className={twMerge(
            "font-extrabold bg-blue-900 text-gray-200 px-[0.75rem] py-[0.1rem] rounded-md"
          )}
        >
          {unreadNotifications.length}
        </span>
        <Button>Mark all as read</Button>
      </div>
      <ol>Notifications...</ol>
    </div>
  );
};
