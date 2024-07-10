"use client";
import React, { useEffect, useRef } from "react";
import { ContainerWrapper, Reveal, HeroContent } from "@/components";
import Image from "next/image";
import {
  IoMailOutline,
  IoLocationOutline,
  IoBriefcaseOutline,
} from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { GoDownload } from "react-icons/go";
import {
  animate,
  m,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

function Hero() {
  return (
    <ContainerWrapper className="bg-bg-one pb-[64px] md:pb-[128px] xl:pt-[94px]">
      <div className="container mx-auto flex flex-col items-center justify-center py-[64px]">
        <div className="flex flex-wrap items-center justify-around gap-16 md:gap-24 lg:gap-32 xl:flex-nowrap xl:gap-12">
          <Reveal>
            <div className="rounded-br-[140px] rounded-tl-[140px] border-2 border-white px-8 py-12 ring-2 ring-offset-2 ring-offset-brand-one">
              <div className="mb-4 flex flex-col items-center justify-center">
                <Reveal>
                  <Image
                    src={"/assets/images/minhazur.png"}
                    alt="profile-image"
                    width={96}
                    height={96}
                    className="mb-4 h-[96px] rounded-full border-2 border-brand-two object-cover"
                  />
                </Reveal>
                <h1 className="text-3xl font-medium capitalize text-white">
                  minhazur
                </h1>
                <p className="text-[14px] capitalize text-white">
                  front-end developer
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <UserInfo
                  label="minhazur.rony@gmail.com"
                  icon={IoMailOutline}
                />
                <UserInfo label="Bangladesh" icon={IoLocationOutline} />
                <UserInfo
                  label="Full-time / Freelance"
                  icon={IoBriefcaseOutline}
                />
                <UserInfo
                  label="www.github.com/minhazurrony"
                  icon={IoIosLink}
                />

                <div className="flex space-x-2">
                  <Tag label="React" />
                  <Tag label="Next" />
                  <Tag label="JS" />
                  <Tag label="TypeScript" />
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Reveal>
                  <button className="text-md flex items-center rounded-full border-2 border-brand-one bg-bg-two px-4 py-1 font-ubuntu text-white duration-300 ease-in hover:bg-brand-one hover:text-grey">
                    Download CV
                    <span className="pl-2">
                      <GoDownload className="text-xl" />
                    </span>
                  </button>
                </Reveal>
              </div>
            </div>
          </Reveal>
          <div className="flex grow flex-wrap items-center justify-center gap-16 lg:flex-nowrap lg:gap-8">
            <HeroContent />
            <Reveal className="w-full lg:w-3/12">
              <div className="flex flex-col gap-4 rounded-[70px] bg-bg-two px-8 py-12">
                <Stats title="production apps" count={15} />
                <Stats title="development tools" count={6} />
                <Stats title="years of exp" count={4} />
              </div>
            </Reveal>
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
  count: number;
  title: string;
};

function Stats({ count, title }: StatsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const initialValue = useMotionValue(0);
  const rounded = useTransform(initialValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(initialValue, count, {
        duration: 2,
        delay: 0.3,
      });
    }
  }, [isInView, count, initialValue]);

  return (
    <div className="text-center">
      <m.h3 ref={ref} className="font-ubuntu text-[48px] text-brand-one">
        {rounded}
      </m.h3>
      <Reveal>
        <p className="capitalize text-white">{title}</p>
      </Reveal>
    </div>
  );
}
