import Link from "next/link";
import React from "react";
import { FaSquareGithub, FaLinkedin, FaCode } from "react-icons/fa6";

import { ContainerWrapper } from "@/components";

function SocialIcons() {
  return (
    <div className="flex items-end space-x-3 backdrop-blur-md md:space-x-5">
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
    </div>
  );
}

function Navbar() {
  return (
    <ContainerWrapper className="sticky top-0 z-20 bg-bg-one/95">
      <nav className="container flex items-end justify-between border-b border-grey py-8 md:mx-auto">
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
