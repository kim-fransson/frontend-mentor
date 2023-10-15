import ShortlyLogo from "../../assets/logo.svg?react";
import { Button } from "../Button/Button";
import { Link } from "../Link/Link";
import { MenuButton } from "../MenuButton/MenuButton";
import { Item, Section } from "react-stately";

export const Navbar = () => {
  return (
    <nav className="px-5 lg:px-24 py-2 z-50 sticky top-0 backdrop-blur-lg bg-white/80 flex items-center lg:gap-5">
      <ShortlyLogo className="text-gray-800" />
      <Link className="hidden lg:block text-gray-400">features</Link>
      <Link className="hidden lg:block text-gray-400">pricing</Link>
      <Link className="hidden lg:block text-gray-400">resources</Link>
      <Link className="hidden lg:block text-gray-400 ml-auto">login</Link>
      <Button
        size="large"
        className="hidden lg:block px-3 py-1 font-medium text-sm"
      >
        Sign Up
      </Button>
      <MenuButton className="ml-auto lg:hidden">
        <Section>
          <Item key="features">Features</Item>
          <Item key="pricing">Pricing</Item>
          <Item key="resources">Resources</Item>
        </Section>
        <Section>
          <Item key="login">Login</Item>
          <Item key="sign-up">Sign Up</Item>
        </Section>
      </MenuButton>
    </nav>
  );
};
