import React from "react";
import { ContainerWrapper } from "@/components";
import Image from "next/image";
import {
  IoMailOutline,
  IoLocationOutline,
  IoBriefcaseOutline,
} from "react-icons/io5";
import { IoIosLink } from "react-icons/io";

function Hero() {
  return (
    <ContainerWrapper className="bg-bg-one">
      <div className="container mx-auto flex flex-col items-center justify-center py-[64px]">
        <h1 className="text-brand-two font-ubuntu md:block hidden pb-[64px] text-[5rem] capitalize">
          developer
        </h1>
        <div className="xl:flex-nowrap flex flex-wrap items-center justify-around gap-32">
          <div>
            <div className="mb-4 flex flex-col items-center justify-center">
              <Image
                src={"/assets/images/minhazur.png"}
                alt="profile-image"
                width={96}
                height={96}
                className="border-brand-two mb-4 h-[96px] rounded-full border-2 object-cover"
              />
              <h1 className="font-ibm-plex-mono text-3xl font-medium capitalize text-white">
                minhazur
              </h1>
              <p className="font-ibm-plex-mono text-[14px] capitalize text-white">
                front-end developer
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="font-ibm-plex-mono flex items-center gap-4">
                <IoMailOutline className="text-brand-one self-end" />
                <p className="text-[14px] text-white">
                  minhazur.rony@gmail.com
                </p>
              </div>
              <div className="font-ibm-plex-mono flex items-center gap-4">
                <IoLocationOutline className="text-brand-one self-end" />
                <p className="text-[14px] text-white">Bangladesh</p>
              </div>
              <div className="font-ibm-plex-mono flex items-center gap-4">
                <IoBriefcaseOutline className="text-brand-one self-end" />
                <p className="text-[14px] text-white">Full-time / Freelance</p>
              </div>
              <div className="font-ibm-plex-mono flex items-center gap-4">
                <IoIosLink className="text-brand-one self-end" />
                <p className="text-[14px] text-white">
                  www.github.com/minhazurrony
                </p>
              </div>
              <div className="flex space-x-2">
                <p className="text-bg-one bg-brand-one rounded-md px-2 text-[14px] leading-[2]">
                  React
                </p>
                <p className="text-bg-one bg-brand-one rounded-md px-2 text-[14px] leading-[2]">
                  Next.js
                </p>
                <p className="text-bg-one bg-brand-one rounded-md px-2 text-[14px] leading-[2]">
                  JavaScript
                </p>
                <p className="text-bg-one bg-brand-one rounded-md px-2 text-[14px] leading-[2]">
                  TypeScript
                </p>
              </div>
            </div>
          </div>
          <div className="md:flex-nowrap flex flex-wrap items-center justify-center gap-10">
            <div className="flex-2">
              <h1 className="font-ubuntu mb-8 text-[64px] capitalize leading-[1.1] text-white">
                <span className="text-brand-two font-ibm-plex-mono text-[14px] lowercase">
                  {"<h1>"}
                </span>
                <br />
                hey <br />
                i'm <span className="text-brand-one">minhazur</span>, <br />
                front-end developer
                <span className="text-brand-two font-ibm-plex-mono text-[14px] lowercase">
                  {"</h1>"}
                </span>
              </h1>

              <p className="text-white">
                <span className="text-brand-two font-ibm-plex-mono text-[14px]">
                  {"<p>"}
                </span>{" "}
                <br /> I help business grow by crafting amazing web experiences.
                If you’re looking for a developer that likes to get stuff done{" "}
                <br />
                <span className="text-brand-two font-ibm-plex-mono text-[14px]">
                  {"</p>"}
                </span>
              </p>
            </div>
            <div className="bg-bg-two flex h-[378px] w-[215px] flex-col justify-around rounded-[70px] px-8 py-12">
              <div className="flex items-center justify-center gap-4">
                <h3 className="font-ibm-plex-mono text-brand-one text-[48px]">
                  4
                </h3>
                <p className="capitalize text-white">programming language</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <h3 className="font-ibm-plex-mono text-brand-one text-[48px]">
                  6
                </h3>
                <p className="capitalize text-white">development tools</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <h3 className="font-ibm-plex-mono text-brand-one text-[48px]">
                  4
                </h3>
                <p className="capitalize text-white">years of experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
}

export default Hero;
