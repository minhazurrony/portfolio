"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { LuExternalLink } from "react-icons/lu";
import { m, useAnimation, useInView } from "framer-motion";
import Tag from "./Tag";
import Link from "next/link";
import { Project } from "@/constants/projects";

function ProjectCard({
  id,
  name,
  imageUrl,
  author,
  date,
  techonologies,
  externalLink,
}: Project) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView, animationControls]);
  return (
    <div className="space-y-6">
      <Image
        src={imageUrl}
        alt={`project-image-${id}`}
        height={450}
        width={450}
        className="rounded-xl brightness-50"
        style={{ height: "350px", width: "100%", objectFit: "cover" }}
      />
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
          className="rounded-full bg-brand-two px-3 py-3 text-grey transition-all duration-300 ease-in hover:bg-brand-one"
        >
          <LuExternalLink className="text-xl" />
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        {techonologies.map((technology) => (
          <Tag label={technology} key={technology} />
        ))}
      </div>

      <h4 className="font-ubuntu text-xl text-white">{name}</h4>
    </div>
  );
}

export default ProjectCard;
