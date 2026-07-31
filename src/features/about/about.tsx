import React from "react";
import { ContainerWrapper, Reveal, ScrollBottom } from "@/components/common";
import Image from "next/image";
import AboutCopy from "./components/about-copy";

function About() {
  return (
    <ContainerWrapper className="bg-bg-two bg-[url('/assets/images/about_bg.svg')] bg-cover bg-center bg-no-repeat p-8 md:p-16 lg:p-[128px]">
      <div className="mb-[128px] hidden lg:block">
        <ScrollBottom />
      </div>
      <div className="flex flex-col justify-between gap-16 xl:flex-row xl:gap-32">
        <div className="flex w-full flex-col items-center gap-16 lg:items-start xl:w-3/5">
          <Reveal>
            <h2 className="mx-auto inline-block rounded-br-[40px] rounded-tl-[40px] border-2 border-brand-one px-10 py-4 font-ubuntu text-4xl capitalize text-white md:text-5xl lg:text-6xl">
              about me
            </h2>
          </Reveal>
          <AboutCopy />
        </div>
        <Reveal className="w-full xl:w-2/5">
          <Image
            className="w-2/5 flex-auto rounded-2xl object-cover brightness-50 grayscale md:max-h-[628px]"
            src={"/assets/images/about.jpg"}
            alt="about-image"
            width={150}
            height={150}
            style={{ width: "100%", height: "100%" }}
          />
        </Reveal>
      </div>
    </ContainerWrapper>
  );
}

export default About;
