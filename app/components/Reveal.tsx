"use client";
import React, { useEffect, useRef } from "react";
import { m, useAnimation, useInView } from "framer-motion";

type RevealProps = {
  children: JSX.Element;
  className?: string;
};

function Reveal({ children, className }: RevealProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <m.div
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5 }}
    >
      {children}
    </m.div>
  );
}

export default Reveal;
