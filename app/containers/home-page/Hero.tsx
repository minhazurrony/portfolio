"use client";
import React, { useEffect, useRef } from "react";
import { ContainerWrapper, Reveal } from "@/components";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <ContainerWrapper className="bg-bg-one pb-[64px] md:pb-[128px] xl:pt-[94px]">
      <div className="container mx-auto flex flex-col items-center justify-center py-[64px]">
        <div className="flex flex-wrap items-center justify-around gap-8 md:gap-24 lg:gap-32 xl:flex-nowrap">
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
                  <button className="text-md flex items-center rounded-full border-2 bg-white px-4 py-1 font-ubuntu text-bg-one duration-300 ease-in hover:border-brand-one hover:text-bg-two">
                    Download CV{" "}
                    <span className="pl-2">
                      <GoDownload className="text-xl" />
                    </span>
                  </button>
                </Reveal>
              </div>
            </div>
          </Reveal>
          <div className="flex flex-wrap items-center justify-center gap-10 md:flex-nowrap">
            <div className="flex-2" ref={ref}>
              <h1 className="mb-8 font-ubuntu text-4xl capitalize leading-none text-white md:text-5xl lg:text-6xl">
                <m.span
                  className="font-ibm-plex-mono text-[14px] lowercase text-brand-two"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {"<h1>"}
                </m.span>
                <br />
                <m.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  hey
                </m.span>
                <br />
                <m.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  i'm {""}
                  <m.span
                    className="text-brand-one"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    minhazur
                  </m.span>
                  <m.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    ,
                  </m.span>
                </m.span>
                <br />
                <m.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  front-end developer
                </m.span>
                <m.span
                  className="font-ibm-plex-mono text-[14px] lowercase text-brand-two"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  {"</h1>"}
                </m.span>
              </h1>

              <p className="text-[14px] text-white">
                <m.span
                  className="text-brand-two"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  {"<p>"}
                </m.span>
                <br />
                <m.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  I help business grow by crafting amazing web experiences. If
                  you’re looking for a developer that likes to get stuff done
                </m.span>
                <br />
                <m.span
                  className="text-brand-two"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  {"</p>"}
                </m.span>
              </p>
            </div>
            <Reveal>
              <div className="flex w-4/5 flex-col gap-4 rounded-[70px] bg-bg-two px-8 py-12 md:w-[215px]">
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
  }, [isInView]);

  return (
    <div className="text-center md:text-left">
      <m.h3 ref={ref} className="text-[48px] text-brand-one">
        {rounded}
      </m.h3>
      <Reveal>
        <p className="capitalize text-white">{title}</p>
      </Reveal>
    </div>
  );
}
