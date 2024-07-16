"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { LuExternalLink } from "react-icons/lu";
import { m, useAnimation } from "framer-motion";
import Tag from "./Tag";
import Link from "next/link";
import { Project } from "@/constants/projects";

type ProjectCardProps = Project & {
  isActive: boolean;
  animationDirection: "left" | "right";
};

const variants = {
  hidden: (direction: string) => ({
    opacity: 0,
    x: direction === "left" ? 100 : -100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
    },
  }),
};

const nameVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  imageUrl,
  author,
  date,
  techonologies,
  externalLink,
  isActive,
  animationDirection,
}) => {
  const animationControls = useAnimation();

  useEffect(() => {
    if (isActive) {
      animationControls.start("visible");
    } else {
      animationControls.start("hidden");
    }
  }, [isActive, animationControls]);

  return (
    <m.div
      className="rounded-xl bg-bg-two shadow-xl"
      initial="hidden"
      animate={animationControls}
      variants={variants}
      custom={animationDirection}
    >
      <Image
        src={imageUrl}
        alt={`project-image-${id}`}
        height={450}
        width={450}
        className="rounded-t-xl brightness-50"
        style={{ height: "350px", width: "100%", objectFit: "cover" }}
        priority={true}
      />
      <div className="space-y-4 p-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <p className="text-sm text-white before:mr-2 before:inline-block before:h-3 before:w-3 before:rounded-full before:bg-brand-one before:content-['']">
              {author}
            </p>
            <p className="text-sm text-white before:mr-2 before:inline-block before:h-3 before:w-3 before:rounded-full before:bg-brand-one before:content-['']">
              {date}
            </p>
          </div>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={externalLink}
            aria-label="project link"
            className="rounded-full bg-brand-two px-3 py-3 text-grey transition-all duration-300 ease-in hover:bg-brand-one"
          >
            <LuExternalLink className="text-xl" />
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          {techonologies.map((technology, idx) => (
            <m.div variants={tagVariants} custom={idx} key={technology}>
              <Tag label={technology} />
            </m.div>
          ))}
        </div>

        <m.p className="font-ubuntu text-xl text-white" variants={nameVariants}>
          {name}
        </m.p>
      </div>
    </m.div>
  );
};

export default ProjectCard;
