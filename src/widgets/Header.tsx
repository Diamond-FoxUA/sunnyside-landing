"use client";
import { useState } from "react";

import Icon from "@/shared/ui/Icon";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <header className="flex w-full max-w-336 justify-between items-center mx-auto bg-transparent">
        <a
          href="#top"
          className="px-6 py-8 md:px-10 md:py-12 lg:py-8 hover:scale-110 active:opacity-25 transition-all duration-300"
          aria-label="Back to top"
        >
          <Icon
            iconName="icon-logo"
            width={124}
            height={24}
            className="fill-white md:w-42.5 md:h-8.25"
          />
        </a>

        <div className="hidden lg:block lg:pr-12">
          <Navigation />
        </div>

        <button
          type="button"
          className="flex lg:hidden justify-center items-center px-6 py-8 md:px-10 md:py-12 hover:opacity-50 active:opacity-25 transition-opacity duration-300 cursor-pointer"
          aria-expanded={isMenuOpen}
          aria-label="Toggle Mobile Menu"
          onClick={toggleMenu}
        >
          <Icon
            iconName="icon-hamburger"
            width={24}
            height={18}
            className="fill-white md:w-8 md:h-6"
          />
        </button>

        <MobileMenu isMenuOpen={isMenuOpen} onClose={toggleMenu} />
      </header>
    </div>
  );
}
