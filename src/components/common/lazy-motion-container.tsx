"use client";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import React, { PropsWithChildren } from "react";

function LazyMotionContainer({ children }: PropsWithChildren) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

export default LazyMotionContainer;
