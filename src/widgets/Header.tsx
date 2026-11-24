"use client";
import { useEffect, useState } from "react";

import Icon from "@/shared/ui/Icon";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";

const HEADER_THEMES = {
  default: "bg-blue-bg",
  blue: "bg-blue-bg shadow-2xl",
  yellow: "bg-yellow-500 shadow-2xl",
  red: "bg-red-400 shadow-2xl",
  green: "bg-green-300 shadow-2xl",
} as const;

type HeaderTheme = keyof typeof HEADER_THEMES;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const [sectionTheme, setSectionTheme] = useState<HeaderTheme>("default");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = document.querySelectorAll<HTMLElement>(
      "[data-header-theme]",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newTheme = entry.target.getAttribute(
              "data-header-theme",
            ) as HeaderTheme;
            if (newTheme && HEADER_THEMES[newTheme]) {
              setSectionTheme(newTheme);
            }
          }
        });
      },
      {
        rootMargin: "-80px 0px -85% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const activeTheme: HeaderTheme = isScrolled ? sectionTheme : "default";

  return (
    <div
      className={`fixed top-0 left-[50%] translate-x-[-50%] z-50 w-full max-w-360 ${HEADER_THEMES[activeTheme]} transition-all duration-300`}
    >
      <header
        className={`flex w-full max-w-336 justify-between items-center mx-auto`}
      >
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
