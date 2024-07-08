"use client";
import { LazyMotion, domAnimation } from "framer-motion";
import React, { PropsWithChildren } from "react";

function LazyMotionContainer({ children }: PropsWithChildren) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

export default LazyMotionContainer;
