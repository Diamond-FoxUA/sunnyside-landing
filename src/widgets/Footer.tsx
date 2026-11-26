"use client";

import { NAV_ITEMS } from "@/shared/constants/navigation";
import { SOCIAL_LINKS } from "@/shared/constants/socials";

import Icon from "@/shared/ui/Icon";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="flex justify-center items-center w-full py-[73.5px] px-[38.5px] bg-green-300">
      <div className="flex flex-col gap-10 w-full max-w-74.5 justify-center items-center ">
        <a
          href="#top"
          aria-label="Back to top"
          className="hover:scale-110 transition-transform duration-300"
          onClick={scrollToTop}
        >
          <Icon
            iconName="icon-logo"
            width={170}
            height={33}
            className="fill-green-600"
          />
        </a>

        <nav className="w-full">
          <ul className="flex justify-between items-center w-full">
            {NAV_ITEMS.map((navItem) => (
              <li
                key={navItem.id}
                className="text-[18px] text-green-500 hover:text-white active:text-white/25 font-semibold leading-[165%] transition-colors duration-300"
              >
                <a href={`#`}>{navItem.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="py-10">
          <ul className="flex items-center gap-6">
            {SOCIAL_LINKS.map((socialLink) => (
              <li key={socialLink.label}>
                <Link
                  href={socialLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialLink.label}
                >
                  <Icon
                    iconName={socialLink.icon}
                    width={socialLink.width}
                    height={socialLink.height}
                    className="fill-green-500 hover:fill-white transition-colors duration-300"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-center font-normal text-green-600">
          Challenge by{" "}
          <Link
            href="https://www.frontendmentor.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-800 hover:text-white active:opacity-25 transition-all duration-300"
          >
            Frontend Mentor
          </Link>
          . Coded by{" "}
          <Link
            href="https://github.com/Diamond-FoxUA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-800 hover:text-white active:opacity-25 transition-all duration-300"
          >
            Dmytro Farbun
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
