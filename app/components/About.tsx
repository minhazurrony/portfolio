import React from "react";
import { ContainerWrapper, ScrollBottom } from "@/components";
import Image from "next/image";

function About() {
  return (
    <ContainerWrapper className="bg-bg-two bg-[url('/assets/images/about_bg.svg')] bg-cover bg-center bg-no-repeat p-[128px]">
      <div className="mb-[128px] hidden lg:block">
        <ScrollBottom />
      </div>
      <div className="flex flex-col justify-between gap-16 xl:flex-row xl:gap-32">
        <div className="w-full xl:w-3/5">
          <h2 className="mb-16 inline-block rounded-br-[40px] rounded-tl-[40px] border-2 border-brand-one px-10 py-4 font-ubuntu text-6xl capitalize text-white">
            about me
          </h2>

          <pre className="whitespace-pre-wrap break-words rounded-2xl bg-bg-one/40 px-10 py-6 text-white backdrop-blur-sm">
            <span className="mb-4 block text-brand-one">{`<p>`}</span>
            <span className="text-xl capitalize text-brand-one">hello!</span>
            <br />
            <br />
            My name is Minhazur Rahman and I specialize in web developement that
            utilizes {""}
            <span className="text-brand-one">JavaScript</span>,{" "}
            <span className="text-brand-one">React</span>,{" "}
            <span className="text-brand-one">Next.js</span> and{" "}
            <span className="text-brand-one">TypeScript</span> etc.
            <br />
            <br />
            I am a highly motivated individual and eternal optimist dedicated to
            writing clear, concise, robust code that works. Striving to never
            stop learning and improving.
            <br />
            <br />
            When I'm not coding, I am{" "}
            <span className="text-brand-one">writing bolgs</span>, reading, or
            picking up some new hands-on adventurous project like{" "}
            <span className="text-brand-one">bike riding</span>.
            <br />
            <br />I like to have my perspective and belief systems challenged so
            that I see the world through new eyes.
            <span className="mt-4 block text-brand-one">{`</p>`}</span>
          </pre>
        </div>

        <Image
          className="w-2/5 flex-auto rounded-2xl object-cover md:max-h-[628px]"
          src={"/assets/images/about.jpg"}
          alt="about-image"
          width={150}
          height={150}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </ContainerWrapper>
  );
}

export default About;
