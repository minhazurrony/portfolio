import Link from "next/link";
import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";

function SocialIcons() {
  return (
    <div className="md:space-x-5 flex items-end space-x-3">
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href={"https://www.linkedin.com/in/minhazurrony/"}
        className="inline-flex items-center gap-1"
      >
        <CiLinkedin className="text-brand-one text-2xl" />
        <span className="font-ibm-plex-mono hover:text-brand-one md:inline hidden text-base leading-5 text-white duration-300 ease-in-out">
          LinkedIn
        </span>
      </Link>

      <Link
        rel="noopener noreferrer"
        target="_blank"
        href={"https://www.github.com/minhazurrony/"}
        className="inline-flex items-center gap-1"
      >
        <FaSquareGithub className="text-brand-one text-2xl" />
        <span className="font-ibm-plex-mono hover:text-brand-one md:inline hidden text-base leading-5 text-white duration-300 ease-in-out">
          GitHub
        </span>
      </Link>
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-bg-one md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[10rem] px-[1rem]">
      <nav className="border-grey md:mx-auto container flex items-center justify-between border-b py-8">
        <div className="flex items-center">
          <BsCodeSlash className="text-brand-one md:text-3xl text-2xl" />
          <span className="font-ibm-plex-mono md:text-2xl md:leading-6 px-2 text-base leading-5 text-white">
            Minhazur
          </span>
        </div>
        <SocialIcons />
      </nav>
    </div>
  );
}

export default Navbar;
