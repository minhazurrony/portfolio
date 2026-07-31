import React from "react";
import { ContainerWrapper } from "@/components/common";
import { PROFILE } from "@/content/profile";
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
      aria-label="social link"
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
          <SocialLink url={PROFILE.socials.linkedin} icon={<FaLinkedinIn />} />
          <SocialLink url={PROFILE.socials.github} icon={<FaGithub />} />
          <SocialLink url={PROFILE.socials.facebook} icon={<FaFacebookF />} />
        </div>
        <p className="capitalize">
          developed by {""}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            aria-label="linkedin"
            href={PROFILE.socials.linkedin}
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
