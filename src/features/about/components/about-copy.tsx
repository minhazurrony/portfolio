"use client";
import React, { useRef } from "react";
import { m, useInView } from "framer-motion";
import { Reveal } from "@/components/common";

function AboutCopy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
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
          My name is Minhazur Rahman and I specialize in web developement that
          utilizes {""}
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
          I am a highly motivated individual and eternal optimist dedicated to
          writing clear, concise, robust code that works. Striving to never stop
          learning and improving.
        </m.span>
        <br />
        <br />
        <m.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          When I&apos;m not coding, I am{" "}
          <span className="text-brand-one">writing bolgs</span>, reading, or
          picking up some new hands-on adventurous project like{" "}
          <span className="text-brand-one">bike riding</span>.
        </m.span>
        <br />
        <br />
        <m.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          I like to have my perspective and belief systems challenged so that I
          see the world through new eyes.
        </m.span>
        <m.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="mt-4 block text-brand-one"
        >{`</p>`}</m.span>
      </m.pre>
    </Reveal>
  );
}

export default AboutCopy;
