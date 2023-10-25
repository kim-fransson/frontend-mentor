import { twMerge } from "tailwind-merge";
import Logo from "../../assets/logo.svg?react";
import Menu from "../../assets/icon-hamburger.svg?react";
import Cross from "../../assets/icon-close.svg?react";
import { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";

export interface NavigationProps {
  links: string[];
  className?: string;
}

export const Navigation = ({ links, className }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useClickAway<HTMLDivElement>(() => {
    setIsMenuOpen(false);
  });
  return (
    <>
      <div
        className={twMerge(
          "fixed z-40 inset-0 bg-black opacity-0 transition-all duration-500",
          isMenuOpen ? "opacity-50" : "hidden"
        )}
      />
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
          className={twMerge("text-gray-100", isMenuOpen ? "hidden " : "block")}
        />
        <div
          ref={ref}
          className={twMerge(
            "flex gap-6 bg-white opacity-0 w-screen items-center h-28 -top-12 absolute px-8 transition-all duration-500 font-bold",
            "lg:static lg:bg-transparent lg:h-auto lg:font-medium lg:px-0 lg:-top-0 lg:translate-y-0 lg:opacity-100",
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full"
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
                "cursor-pointer outline-none relative after:content-[''] after:absolute after:bottom-0 after:left-0",
                "after:w-full after:h-[0.11em] after:bg-current after:transition-all after:duration-300 after:scale-0",
                "after:hover:scale-100 after:focus:scale-100 lg:text-gray-50"
              )}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};
