import Logo from "../../../assets/svg/logo.svg?react";
import MenuIcon from "../../../assets/svg/icon-menu.svg?react";
import MenuClose from "../../../assets/svg/icon-menu-close.svg?react";
import { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { Transition } from "@headlessui/react";

interface NavigationProps {
  className?: string;
}
interface MenuProps {
  show: boolean;
  onClose: () => void;
}

const navigationItems = ["home", "new", "popular", "trending", "categories"];

const Menu = (props: MenuProps) => {
  const { show, onClose } = props;
  const ref = useClickAway<HTMLDivElement>(() => {
    onClose();
  });
  return (
    <Transition appear={show} show={show}>
      <Transition.Child
        className="fixed inset-0 bg-black duration-300 z-30"
        enter="ease-in"
        enterFrom="opacity-0"
        enterTo="opacity-50"
        leave="ease-out"
        leaveFrom="opacity-50"
        leaveTo="opacity-0"
      />
      <Transition.Child
        className="backdrop-blur-lg bg-white/90 p-4 gap-4 flex flex-col fixed top-0 right-0 z-40 w-2/3 h-full transition"
        enter="ease-in-out duration-300"
        enterFrom="translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="ease-in-out duration-1000"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="translate-x-full opacity-0"
        as="aside"
        ref={ref}
      >
        <button
          className="ml-auto mb-24 self-end mt-1 mr-1 block"
          onClick={onClose}
        >
          <MenuClose />
        </button>
        {navigationItems.map((item) => (
          <a
            className="capitalize text-2xl cursor-pointer hover:text-orange-500 transition-all duration-300"
            key={item}
          >
            {item}
          </a>
        ))}
      </Transition.Child>
    </Transition>
  );
};

export const Navigation = (props: NavigationProps) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={props.className}>
      <Menu show={showMenu} onClose={() => setShowMenu(false)} />
      <nav className="p-4 flex justify-end items-center gap-8">
        <Logo className="mr-auto" />
        {navigationItems.map((item) => (
          <a
            className="cursor-pointer hover:text-orange-500 transition-all duration-300 hidden lg:block capitalize"
            key={item}
          >
            {item}
          </a>
        ))}
        <button className="lg:hidden" onClick={() => setShowMenu(true)}>
          <MenuIcon />
        </button>
      </nav>
    </div>
  );
};
