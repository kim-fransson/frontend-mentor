import ShortlyLogo from "../../assets/logo.svg?react";
import HamburgerMenu from "../../assets/icon-hamburger.svg?react";

export interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
  return (
    <nav className="flex justify-between items-center">
      <ShortlyLogo />
      <HamburgerMenu className="w-8 h-8 text-gray-500" />
    </nav>
  );
};
