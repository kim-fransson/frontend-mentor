import { twMerge } from "tailwind-merge";
import ShortlyLogo from "../../assets/logo.svg?react";
import Facebook from "../../assets/icon-facebook.svg?react";
import Twitter from "../../assets/icon-twitter.svg?react";
import Pinterest from "../../assets/icon-pinterest.svg?react";
import Instagram from "../../assets/icon-instagram.svg?react";

const linkSections = [
  {
    title: "features",
    links: ["link shortening", "branded links", "analytics"],
  },
  {
    title: "resources",
    links: ["blog", "developers", "support"],
  },
  {
    title: "company",
    links: ["about", "our team", "careers", "contact"],
  },
];

export const Footer = () => {
  const linkClasses = twMerge(
    "select-none rounded-md border border-transparent p-1 capitalize cursor-pointer transition-colors ease-in-out duration-150 hover:text-teal-500",
    "focus-visible:outline-none focus-visible:text-teal-500 focus-visible:border focus-visible:border-teal-500",
    "hover:animate-wiggle hover:animate-twice hover:animate-duration-300 hover:animate-ease-out",
    "focus-visible:animate-wiggle focus-visible:animate-twice focus-visible:animate-duration-300 focus-visible:animate-ease-out"
  );
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 flex flex-col items-center">
      <ShortlyLogo className="mb-12" />
      {linkSections.map((section) => (
        <ul className="flex flex-col items-center mb-8">
          <span className="select-none font-bold capitalize mb-3">
            {section.title}
          </span>
          {section.links.map((link) => (
            <a tabIndex={0} className={twMerge(linkClasses, "text-stone-400")}>
              {link}
            </a>
          ))}
        </ul>
      ))}
      <div className="flex gap-5 items-center">
        <a tabIndex={0} className={linkClasses}>
          <Facebook />
        </a>

        <a tabIndex={0} className={linkClasses}>
          <Twitter />
        </a>

        <a tabIndex={0} className={linkClasses}>
          <Pinterest />
        </a>

        <a tabIndex={0} className={linkClasses}>
          <Instagram />
        </a>
      </div>
    </footer>
  );
};
