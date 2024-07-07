import React from "react";
import ContainerWrapper from "./ContainerWrapper";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <ContainerWrapper className="rounded-none bg-bg-one">
      <footer className="flex flex-col items-center justify-center gap-4 py-4 font-ubuntu font-light text-white lg:flex-row lg:justify-between">
        <p>
          &copy; <time>{new Date().getFullYear()}</time> All rights reserved.
        </p>

        <div className="inline-flex items-center gap-6">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={"https://www.linkedin.com/in/minhazurrony/"}
            className="rounded-full bg-brand-two p-2 text-grey shadow-lg transition-all duration-150 ease-in hover:bg-brand-one hover:text-white"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={"https://www.github.com/minhazurrony/"}
            className="rounded-full bg-brand-two p-2 text-grey shadow-lg transition-all duration-150 ease-in hover:bg-brand-one hover:text-white"
          >
            <FaGithub />
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={"https://www.facebook.com/minhazur.rony/"}
            className="rounded-full bg-brand-two p-2 text-grey shadow-lg transition-all duration-150 ease-in hover:bg-brand-one hover:text-white"
          >
            <FaFacebookF />
          </Link>
        </div>
        <p className="capitalize">
          developed by {""}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={"https://www.linkedin.com/in/minhazurrony/"}
            className="lowercase text-brand-one underline"
          >
            minhazurrony
          </Link>
        </p>
      </footer>
    </ContainerWrapper>
  );
}

export default Footer;
