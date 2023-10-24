import { twMerge } from "tailwind-merge";
import Logo from "../../assets/logo.svg?react";
import Menu from "../../assets/icon-hamburger.svg?react";
import Cross from "../../assets/icon-close.svg?react";
import { useState } from "react";

export interface NavigationProps {
  links: string[];
  className?: string;
}

export const Navigation = ({ links, className }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav
      className={twMerge(
        "flex items-center justify-center gap-10 w-full lg:w-auto",
        className
      )}
    >
      <button
        className={twMerge(
          "outline-none lg:hidden absolute left-8 text-gray-100",
          isMenuOpen ? "hidden" : "block"
        )}
        onClick={() => setIsMenuOpen(true)}
      >
        <Menu />
      </button>
      <Logo
        className={twMerge("text-gray-100", isMenuOpen ? "hidden" : "block")}
      />
      <div
        className={twMerge(
          "flex gap-6 bg-white w-screen items-center h-28 -top-12 absolute px-8 transition-transform duration-500 font-bold",
          "lg:static lg:bg-transparent lg:h-auto lg:font-medium lg:px-0 lg:-top-0",
          isMenuOpen ? "translate-y-0" : "-translate-y-full lg:translate-y-0"
        )}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className={twMerge(
            "text-gray-400 mr-auto",
            isMenuOpen ? "block" : "hidden"
          )}
        >
          <Cross />
        </button>
        {links.map((link) => (
          <a
            className={twMerge(
              isMenuOpen ? "block" : "hidden lg:block",
              "outline-none relative after:content-[''] after:absolute after:bottom-0 after:left-0",
              "after:w-full after:h-[0.11em] after:bg-current after:transition-all after:duration-300 after:scale-0",
              "after:hover:scale-100 after:focus:scale-100 lg:text-gray-50"
            )}
            href=""
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
};
