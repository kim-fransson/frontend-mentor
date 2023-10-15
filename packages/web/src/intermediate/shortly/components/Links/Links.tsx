import { useEffect, useRef } from "react";
import { CopyLinkCard } from "../CopyLinkCard/CopyLinkCard";

export interface LinksProps {
  links: { originalUrl: string; shortenUrl: string }[];
  onRemove: (link: { originalUrl: string; shortenUrl: string }) => void;
}

export const Links = (props: LinksProps) => {
  const lastItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [props.links]);
  return (
    <section className="bg-gray-200">
      <ul className="flex flex-col gap-5 pt-24 px-6 lg:px-24">
        {props.links.map((link, index) => (
          <div ref={index === props.links.length - 1 ? lastItemRef : null}>
            <CopyLinkCard
              key={link.originalUrl}
              originalUrl={link.originalUrl}
              shortenUrl={link.shortenUrl}
              onRemove={() => props.onRemove(link)}
            />
          </div>
        ))}
      </ul>
    </section>
  );
};
