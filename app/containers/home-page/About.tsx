"use client";
import React, { useRef } from "react";
import { ContainerWrapper, Reveal, ScrollBottom } from "@/components";
import Image from "next/image";
import { m, useInView } from "framer-motion";

function About() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <ContainerWrapper className="bg-bg-two bg-[url('/assets/images/about_bg.svg')] bg-cover bg-center bg-no-repeat p-[128px]">
      <div className="mb-[128px] hidden lg:block">
        <ScrollBottom />
      </div>
      <div className="flex flex-col justify-between gap-16 xl:flex-row xl:gap-32">
        <div className="w-full xl:w-3/5">
          <Reveal>
            <h2 className="mb-16 inline-block rounded-br-[40px] rounded-tl-[40px] border-2 border-brand-one px-10 py-4 font-ubuntu text-4xl capitalize text-white md:text-5xl lg:text-6xl">
              about me
            </h2>
          </Reveal>
          <Reveal>
            <m.pre
              ref={ref}
              className="whitespace-pre-wrap break-words rounded-2xl bg-bg-one/40 px-10 py-6 text-white backdrop-blur-sm"
            >
              <m.span
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-4 block text-brand-one"
              >{`<p>`}</m.span>
              <m.span
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-xl capitalize text-brand-one"
              >
                hello!
              </m.span>
              <br />
              <br />
              <m.span
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                My name is Minhazur Rahman and I specialize in web developement
                that utilizes
                <span className="text-brand-one">JavaScript</span>,{" "}
                <span className="text-brand-one">React</span>,{" "}
                <span className="text-brand-one">Next.js</span> and{" "}
                <span className="text-brand-one">TypeScript</span> etc.
              </m.span>
              <br />
              <br />
              <m.span
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                I am a highly motivated individual and eternal optimist
                dedicated to writing clear, concise, robust code that works.
                Striving to never stop learning and improving.
              </m.span>
              <br />
              <br />
              <m.span
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                When I'm not coding, I am{" "}
                <span className="text-brand-one">writing bolgs</span>, reading,
                or picking up some new hands-on adventurous project like{" "}
                <span className="text-brand-one">bike riding</span>.
              </m.span>
              <br />
              <br />
              <m.span
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                I like to have my perspective and belief systems challenged so
                that I see the world through new eyes.
              </m.span>
              <m.span
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="mt-4 block text-brand-one"
              >{`</p>`}</m.span>
            </m.pre>
          </Reveal>
        </div>
        <Reveal className="w-full xl:w-2/5">
          <Image
            className="w-2/5 flex-auto rounded-2xl object-cover md:max-h-[628px]"
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
