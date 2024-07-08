"use client";
import Link from "next/link";
import React from "react";
import { FaSquareGithub, FaLinkedin, FaCode } from "react-icons/fa6";
import { ContainerWrapper } from "@/components";
import { useVerticalScroll } from "@/hooks";
import { m } from "framer-motion";

function SocialIcons() {
  return (
    <div className="flex items-end space-x-3 md:space-x-5">
      <m.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href={"https://www.linkedin.com/in/minhazurrony/"}
          className="group flex space-x-2"
        >
          <FaLinkedin className="text-xl text-brand-one" />
          <span className="hidden text-white duration-300 ease-in-out group-hover:text-brand-one md:inline">
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
          className="group flex space-x-2"
        >
          <FaSquareGithub className="text-xl text-brand-one" />
          <span className="hidden text-white duration-300 ease-in-out group-hover:text-brand-one md:inline">
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
        className={`container flex items-end justify-between border-b border-grey py-8 transition-all duration-100 ease-linear md:mx-auto`}
      >
        <div className="flex items-center">
          <FaCode className="text-2xl text-brand-one md:text-3xl" />
          <span className="px-2 text-white md:text-xl">Minhazur</span>
        </div>
        <SocialIcons />
      </nav>
    </ContainerWrapper>
  );
}

export default Navbar;
