import React from "react";
import { BsCodeSlash } from "react-icons/bs";

function Navbar() {
  return (
    <div className="bg-bg-one">
      <nav className="border-grey md:mx-auto container flex items-center justify-between border-b py-8">
        <div className="flex items-center">
          <BsCodeSlash className="text-brand-one md:text-3xl text-2xl" />
          <span className="font-ibm-plex-mono md:text-2xl md:leading-6 px-2 text-base leading-5 text-white">
            Minhazur
          </span>
        </div>
        <div>social icons</div>
      </nav>
    </div>
  );
}

export default Navbar;
