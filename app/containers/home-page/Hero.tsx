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
    <ContainerWrapper className="bg-bg-one pb-[64px] md:pb-[128px] xl:pt-[94px]">
      <div className="container mx-auto flex flex-col items-center justify-center py-[64px]">
        <div className="flex flex-wrap items-center justify-around gap-8 md:gap-24 lg:gap-32 xl:flex-nowrap">
          <div className="rounded-br-[140px] rounded-tl-[140px] border-2 border-white px-8 py-12 ring-2 ring-offset-2 ring-offset-brand-one">
            <div className="mb-4 flex flex-col items-center justify-center">
              <Image
                src={"/assets/images/minhazur.png"}
                alt="profile-image"
                width={96}
                height={96}
                className="mb-4 h-[96px] rounded-full border-2 border-brand-two object-cover"
              />
              <h1 className="text-3xl font-medium capitalize text-white">
                minhazur
              </h1>
              <p className="text-[14px] capitalize text-white">
                front-end developer
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <UserInfo label="minhazur.rony@gmail.com" icon={IoMailOutline} />
              <UserInfo label="Bangladesh" icon={IoLocationOutline} />
              <UserInfo
                label="Full-time / Freelance"
                icon={IoBriefcaseOutline}
              />
              <UserInfo label="www.github.com/minhazurrony" icon={IoIosLink} />

              <div className="flex space-x-2">
                <Tag label="React" />
                <Tag label="Next" />
                <Tag label="JS" />
                <Tag label="TypeScript" />
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
              <h1 className="mb-8 font-ubuntu text-4xl capitalize leading-none text-white md:text-5xl lg:text-6xl">
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

              <p className="text-[14px] text-white">
                <span className="text-brand-two">{"<p>"}</span> <br /> I help
                business grow by crafting amazing web experiences. If you’re
                looking for a developer that likes to get stuff done <br />
                <span className="text-brand-two">{"</p>"}</span>
              </p>
            </div>
            <div className="flex w-4/5 flex-col gap-4 rounded-[70px] bg-bg-two px-8 py-12 md:w-[215px]">
              <Stats title="production apps" count="15+" />
              <Stats title="development tools" count="6+" />
              <Stats title="years of exp" count="4+" />
            </div>
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
}

export default Hero;

type UserInfoProps = {
  label: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
};

function UserInfo(props: UserInfoProps) {
  return (
    <div className="flex items-center gap-4">
      <props.icon className="self-end text-brand-one" />
      <p className="text-[14px] text-white">{props.label}</p>
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <p className="rounded-md bg-brand-one px-2 text-[14px] leading-[2] text-bg-one">
      {label}
    </p>
  );
}

type StatsProps = {
  count: string;
  title: string;
};

function Stats({ count, title }: StatsProps) {
  return (
    <div className="text-center md:text-left">
      <h3 className="text-[48px] text-brand-one">{count}</h3>
      <p className="capitalize text-white">{title}</p>
    </div>
  );
}
