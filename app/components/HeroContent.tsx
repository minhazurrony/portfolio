"use client";
import React, { useRef } from "react";
import { useInView, m } from "framer-motion";

function HeroContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <div className="mb-8">
        <m.span
          className="font-ibm-plex-mono text-[14px] lowercase text-brand-two"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {"<h1>"}
        </m.span>
        <h1 className="font-ubuntu text-4xl capitalize leading-none text-white md:text-5xl">
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
            i&apos;m {""}
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
        </h1>
        <m.span
          className="font-ibm-plex-mono text-[14px] lowercase text-brand-two"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          {"</h1>"}
        </m.span>
      </div>

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
          I help business grow by crafting amazing web experiences. <br /> If
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
  );
}

export default HeroContent;
