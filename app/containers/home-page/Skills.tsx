"use client";
import React, { useEffect, useRef } from "react";
import { ContainerWrapper, ScrollBottom, Skill, Title } from "@/components";
import { SKILLS } from "@/constants/skills";
import { animate, m, useMotionValue } from "framer-motion";

function Skills() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    const width = sliderRef.current!.offsetWidth;
    const finalPosition = -width / 2 - 24;
    const controls = animate(xTranslation, finalPosition, {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => {
      controls.stop();
    };
  }, []);

  return (
    <ContainerWrapper className="bg-bg-one p-[128px]">
      <div className="mb-[128px] hidden lg:block">
        <ScrollBottom />
      </div>
      <div className="mb-32">
        <Title
          title="Skills"
          subtitle="I am striving to never stop learning and improving"
        />
      </div>

      <div className="gradient-mask relative mx-auto w-full overflow-hidden py-4 lg:w-4/5">
        <m.div
          className="flex w-fit gap-12"
          style={{ x: xTranslation }}
          ref={sliderRef}
        >
          {[...SKILLS, ...SKILLS].map((skill) => (
            <Skill
              key={skill.name}
              label={skill.name}
              icon={skill.icon}
              iconColor={skill.iconColor}
            />
          ))}
        </m.div>
      </div>
    </ContainerWrapper>
  );
}

export default Skills;
