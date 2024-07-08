import React from "react";
import { ContainerWrapper } from "@/components";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa6";

type SocialLinkProps = {
  url: string;
  icon: React.ReactNode;
};

function SocialLink({ url, icon }: SocialLinkProps) {
  return (
    <Link
      rel="noopener noreferrer"
      target="_blank"
      href={url}
      className="rounded-full bg-brand-two p-2 text-grey shadow-lg transition-all duration-150 ease-in hover:bg-brand-one hover:text-white"
    >
      {icon}
    </Link>
  );
}

function Footer() {
  return (
    <ContainerWrapper className="rounded-none bg-bg-one">
      <footer className="flex flex-col items-center justify-center gap-4 py-4 font-ubuntu font-light text-white lg:flex-row lg:justify-between">
        <p>
          &copy; <time>{new Date().getFullYear()}</time> All rights reserved.
        </p>

        <div className="inline-flex items-center gap-6">
          <SocialLink
            url="https://www.linkedin.com/in/minhazurrony/"
            icon={<FaLinkedinIn />}
          />
          <SocialLink
            url="https://www.github.com/minhazurrony/"
            icon={<FaGithub />}
          />
          <SocialLink
            url="https://www.facebook.com/minhazur.rony/"
            icon={<FaFacebookF />}
          />
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
