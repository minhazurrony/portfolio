"use client";
import Link from "next/link";
import React from "react";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import { ContainerWrapper, Logo } from "@/components";
import { useVerticalScroll } from "@/hooks";
import { m } from "framer-motion";

function SocialIcons() {
  return (
    <div className="flex items-center space-x-4 md:space-x-5">
      {/* TODO: map over list of social icons array and refactor this component to a single item */}
      <m.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href={"https://www.linkedin.com/in/minhazurrony/"}
          className="group flex items-center gap-2"
        >
          <FaLinkedin className="text-3xl text-brand-one" />
          <span className="hidden font-ubuntu text-white duration-300 ease-in-out group-hover:text-brand-one md:inline">
            LinkedIn
          </span>
        </Link>
      </m.div>

      <m.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href={"https://www.github.com/minhazurrony/"}
          className="group flex items-center gap-2"
        >
          <FaSquareGithub className="text-3xl text-brand-one" />
          <span className="hidden font-ubuntu text-white duration-300 ease-in-out group-hover:text-brand-one md:inline">
            GitHub
          </span>
        </Link>
      </m.div>
    </div>
  );
}

function Navbar() {
  const { scrolling } = useVerticalScroll();

  return (
    <ContainerWrapper
      className={`sticky top-0 z-20 ${scrolling ? "bg-bg-one/30 backdrop-blur-lg" : "bg-bg-one"}`}
    >
      <nav
        className={`container flex items-center justify-between border-b border-grey py-2 transition-all duration-100 ease-linear md:mx-auto md:py-4`}
      >
        <Logo />
        <SocialIcons />
      </nav>
    </ContainerWrapper>
  );
}

export default Navbar;
