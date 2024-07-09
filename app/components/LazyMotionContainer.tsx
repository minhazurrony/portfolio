"use client";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import React, { PropsWithChildren } from "react";

function LazyMotionContainer({ children }: PropsWithChildren) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>{children}</AnimatePresence>
    </LazyMotion>
  );
}

export default LazyMotionContainer;
