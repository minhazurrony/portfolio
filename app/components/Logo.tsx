"use client";
import React from "react";
import { m } from "framer-motion";

const pathVarients = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 0,
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

function Logo() {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-12"
    >
      <m.path
        variants={pathVarients}
        initial="hidden"
        animate="visible"
        className="stroke-brand-one"
        d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
      ></m.path>
      <m.path
        variants={pathVarients}
        initial="hidden"
        animate="visible"
        className="stroke-brand-one"
        d="M9 16v-8l3 5l3 -5v8"
      ></m.path>
    </svg>
  );
}

export default Logo;
