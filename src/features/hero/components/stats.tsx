"use client";
import { useEffect, useRef } from "react";
import {
  animate,
  m,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Reveal } from "@/components/common";

type StatsProps = {
  count: number;
  title: string;
};

function Stats({ count, title }: StatsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const initialValue = useMotionValue(0);
  const rounded = useTransform(initialValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(initialValue, count, {
        duration: 1,
        delay: 0.2,
      });
    }
  }, [isInView, count, initialValue]);

  return (
    <div className="text-center">
      <m.p ref={ref} className="font-ubuntu text-[48px] text-brand-one">
        {rounded}
      </m.p>
      <Reveal>
        <p className="capitalize text-white">{title}</p>
      </Reveal>
    </div>
  );
}

export default Stats;
