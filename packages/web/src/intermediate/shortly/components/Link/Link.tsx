import { PropsWithChildren, useRef } from "react";
import { AriaLinkOptions, useLink } from "react-aria";
import { twMerge } from "tailwind-merge";

export interface LinkProps extends AriaLinkOptions, PropsWithChildren {
  className?: string;
}

export const Link = (props: LinkProps) => {
  const ref = useRef(null);
  const { linkProps } = useLink(props, ref);

  return (
    <a
      {...linkProps}
      tabIndex={0}
      ref={ref}
      className={twMerge(
        "block select-none rounded-md border border-transparent p-1 capitalize cursor-pointer transition-colors ease-in-out duration-150 hover:text-teal-500",
        "focus-visible:outline-none focus-visible:text-teal-500 focus-visible:border focus-visible:border-teal-500",
        "hover:animate-wiggle hover:animate-twice hover:animate-duration-300 hover:animate-ease-out",
        "focus-visible:animate-wiggle focus-visible:animate-twice focus-visible:animate-duration-300 focus-visible:animate-ease-out",
        props.className
      )}
    >
      {props.children}
    </a>
  );
};
