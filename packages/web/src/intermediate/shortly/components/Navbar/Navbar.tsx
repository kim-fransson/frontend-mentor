import ShortlyLogo from "../../assets/logo.svg?react";
import HamburgerMenu from "../../assets/icon-hamburger.svg?react";
import { MenuButton } from "../MenuButton/MenuButton";
import { Item, Section } from "react-stately";

export const Navbar = () => {
  return (
    <nav className="flex items-center">
      <ShortlyLogo />
      <MenuButton className="ml-auto">
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
