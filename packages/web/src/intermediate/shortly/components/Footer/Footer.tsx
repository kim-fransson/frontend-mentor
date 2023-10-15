import { twMerge } from "tailwind-merge";
import ShortlyLogo from "../../assets/logo.svg?react";
import Facebook from "../../assets/icon-facebook.svg?react";
import Twitter from "../../assets/icon-twitter.svg?react";
import Pinterest from "../../assets/icon-pinterest.svg?react";
import Instagram from "../../assets/icon-instagram.svg?react";
import { Link } from "../Link/Link";

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
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 flex flex-col items-center">
      <ShortlyLogo className="mb-12" />
      {linkSections.map((section) => (
        <ul key={section.title} className="flex flex-col items-center mb-8">
          <span className="select-none font-bold capitalize mb-3">
            {section.title}
          </span>
          {section.links.map((link) => (
            <Link key={link} className="text-stone-400">
              {link}
            </Link>
          ))}
        </ul>
      ))}
      <div className="flex gap-5 items-center">
        <Link>
          <Facebook />
        </Link>

        <Link>
          <Twitter />
        </Link>

        <Link>
          <Pinterest />
        </Link>

        <Link>
          <Instagram />
        </Link>
      </div>
    </footer>
  );
};
