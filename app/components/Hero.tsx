import React from "react";
import { ContainerWrapper } from "@/components";
import Image from "next/image";
import {
  IoMailOutline,
  IoLocationOutline,
  IoBriefcaseOutline,
} from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { GoDownload } from "react-icons/go";

function Hero() {
  return (
    <ContainerWrapper className="bg-bg-one pb-[64px] md:pb-[128px]">
      <div className="container mx-auto flex flex-col items-center justify-center py-[64px]">
        <h1 className="hidden pb-[64px] font-ubuntu text-[5rem] capitalize text-brand-two md:block">
          developer
        </h1>
        <div className="flex flex-wrap items-center justify-around gap-8 md:gap-24 lg:gap-32 xl:flex-nowrap">
          <div className="rounded-br-[160px] rounded-tl-[160px] border-2 border-white px-8 py-24 ring-2 ring-offset-2 ring-offset-brand-one">
            <div className="mb-4 flex flex-col items-center justify-center">
              <Image
                src={"/assets/images/minhazur.png"}
                alt="profile-image"
                width={96}
                height={96}
                className="mb-4 h-[96px] rounded-full border-2 border-brand-two object-cover"
              />
              <h1 className="font-ibm-plex-mono text-3xl font-medium capitalize text-white">
                minhazur
              </h1>
              <p className="font-ibm-plex-mono text-[14px] capitalize text-white">
                front-end developer
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-4 font-ibm-plex-mono">
                <IoMailOutline className="self-end text-brand-one" />
                <p className="text-[14px] text-white">
                  minhazur.rony@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-4 font-ibm-plex-mono">
                <IoLocationOutline className="self-end text-brand-one" />
                <p className="text-[14px] text-white">Bangladesh</p>
              </div>
              <div className="flex items-center gap-4 font-ibm-plex-mono">
                <IoBriefcaseOutline className="self-end text-brand-one" />
                <p className="text-[14px] text-white">Full-time / Freelance</p>
              </div>
              <div className="flex items-center gap-4 font-ibm-plex-mono">
                <IoIosLink className="self-end text-brand-one" />
                <p className="text-[14px] text-white">
                  www.github.com/minhazurrony
                </p>
              </div>
              <div className="flex space-x-2">
                <p className="rounded-md bg-brand-one px-2 font-ibm-plex-mono text-[14px] leading-[2] text-bg-one">
                  React
                </p>
                <p className="rounded-md bg-brand-one px-2 font-ibm-plex-mono text-[14px] leading-[2] text-bg-one">
                  Next
                </p>
                <p className="rounded-md bg-brand-one px-2 font-ibm-plex-mono text-[14px] leading-[2] text-bg-one">
                  JS
                </p>
                <p className="rounded-md bg-brand-one px-2 font-ibm-plex-mono text-[14px] leading-[2] text-bg-one">
                  TS
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button className="text-md flex items-center rounded-full border-2 bg-white px-4 py-1 font-ubuntu text-bg-one duration-300 ease-in hover:border-brand-one hover:text-bg-two">
                Download CV{" "}
                <span className="pl-2">
                  <GoDownload className="text-xl" />
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 md:flex-nowrap">
            <div className="flex-2">
              <h1 className="mb-8 font-ubuntu text-[64px] capitalize leading-none text-white">
                <span className="font-ibm-plex-mono text-[14px] lowercase text-brand-two">
                  {"<h1>"}
                </span>
                <br />
                hey <br />
                i'm <span className="text-brand-one">minhazur</span>, <br />
                front-end developer
                <span className="font-ibm-plex-mono text-[14px] lowercase text-brand-two">
                  {"</h1>"}
                </span>
              </h1>

              <p className="font-ibm-plex-mono text-[14px] text-white">
                <span className="text-brand-two">{"<p>"}</span> <br /> I help
                business grow by crafting amazing web experiences. If you’re
                looking for a developer that likes to get stuff done <br />
                <span className="text-brand-two">{"</p>"}</span>
              </p>
            </div>
            <div className="flex h-[378px] w-4/5 flex-col items-start justify-around rounded-[70px] bg-bg-two px-8 py-12 md:w-[215px]">
              <div className="flex items-center justify-center gap-4">
                <h3 className="font-ibm-plex-mono text-[48px] text-brand-one">
                  4
                </h3>
                <p className="capitalize text-white">programming language</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <h3 className="font-ibm-plex-mono text-[48px] text-brand-one">
                  6
                </h3>
                <p className="capitalize text-white">development tools</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <h3 className="font-ibm-plex-mono text-[48px] text-brand-one">
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
