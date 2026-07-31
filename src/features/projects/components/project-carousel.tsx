"use client";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Reveal } from "@/components/common";
import { Project } from "@/types";
import ProjectCard from "./project-card";

type ProjectCarouselProps = {
  projects: Project[];
};

type AnimDirection = "left" | "right";

function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] =
    useState<AnimDirection>("left");

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1,
    );
    setAnimationDirection("left");
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
    setAnimationDirection("right");
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (index > activeIndex) {
      setAnimationDirection("left");
    } else {
      setAnimationDirection("right");
    }
  };

  return (
    <Reveal className="flex w-full justify-center">
      <div className="relative w-full px-0 py-6 md:px-12 lg:w-4/5 xl:w-1/2">
        <div className="my-4 md:mx-12 md:my-6">
          <ProjectCard
            key={projects[activeIndex].id}
            id={projects[activeIndex].id}
            name={projects[activeIndex].name}
            imageUrl={projects[activeIndex].imageUrl}
            author={projects[activeIndex].author}
            date={projects[activeIndex].date}
            technologies={projects[activeIndex].technologies}
            externalLink={projects[activeIndex].externalLink}
            isActive={true} // Ensure only the active card is rendered
            animationDirection={animationDirection}
          />
        </div>
        <button
          type="button"
          aria-label="Previous project"
          className="group absolute left-0 top-0 -translate-y-1/2 transform rounded-full border border-brand-one bg-bg-two p-2 transition-all duration-300 ease-in hover:cursor-pointer hover:bg-brand-one focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-one focus-visible:ring-offset-2 focus-visible:ring-offset-bg-two md:top-1/2"
          onClick={handlePrevious}
        >
          <IoIosArrowBack className="text-2xl text-brand-one group-hover:text-grey" />
        </button>
        <button
          type="button"
          aria-label="Next project"
          className="group absolute right-0 top-0 -translate-y-1/2 transform rounded-full border border-brand-one bg-bg-two p-2 transition-all duration-300 ease-in hover:cursor-pointer hover:bg-brand-one focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-one focus-visible:ring-offset-2 focus-visible:ring-offset-bg-two md:top-1/2 md:-translate-x-1/2"
          onClick={handleNext}
        >
          <IoIosArrowForward className="text-2xl text-brand-one group-hover:text-grey" />
        </button>
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 transform gap-2">
          {projects.map((project, index) => {
            return (
              <button
                type="button"
                key={project.id}
                aria-label={`Go to project ${index + 1}`}
                aria-current={activeIndex === index}
                className={`h-3 w-3 rounded-full border border-brand-one ${activeIndex === index ? "h-3 w-10 bg-brand-one" : ""} transition-all duration-300 ease-in hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-one focus-visible:ring-offset-2 focus-visible:ring-offset-bg-two`}
                onClick={() => handleDotClick(index)}
              />
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

export default ProjectCarousel;
