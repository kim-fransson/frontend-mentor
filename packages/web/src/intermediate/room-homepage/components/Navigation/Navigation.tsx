import { twMerge } from "tailwind-merge";
import Logo from "../../assets/logo.svg?react";
import Menu from "../../assets/icon-hamburger.svg?react";

export interface NavigationProps {
  links: string[];
  className?: string;
}

export const Navigation = ({ links, className }: NavigationProps) => {
  return (
    <nav
      className={twMerge(
        "flex items-center justify-center gap-6 font-medium w-full lg:w-auto",
        className
      )}
    >
      <Menu className="lg:hidden absolute left-8 text-gray-100 cursor-pointer" />
      <Logo className="lg:mr-4 text-gray-100" />
      {links.map((link) => (
        <a
          className="hidden lg:block outline-none relative after:content-[''] after:absolute after:bottom-0 after:left-0 
            after:w-full after:h-[0.11em] after:bg-current after:transition-all after:duration-300 after:scale-0
            after:hover:scale-100 after:focus:scale-100
            lg:text-gray-100
          "
          href=""
        >
          {link}
        </a>
      ))}
    </nav>
  );
};
