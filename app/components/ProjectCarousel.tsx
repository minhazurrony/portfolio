"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Project } from "@/constants/projects";

type ProjectCarouselProps = {
  projects: Project[];
};

function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === projects.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === 0) {
        return projects.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full px-0 py-6 md:px-12 lg:w-4/5 xl:w-1/2">
      <div className="my-4 md:mx-12 md:my-6">
        <ProjectCard
          name={projects[activeIndex].name}
          id={projects[activeIndex].id}
          imageUrl={projects[activeIndex].imageUrl}
          author={projects[activeIndex].author}
          date={projects[activeIndex].date}
          techonologies={projects[activeIndex].techonologies}
          externalLink={projects[activeIndex].externalLink}
        />
      </div>
      <div
        className="group absolute left-0 top-0 -translate-y-1/2 transform rounded-full border border-brand-one bg-bg-two p-2 transition-all duration-300 ease-in hover:cursor-pointer hover:bg-brand-one md:top-1/2"
        onClick={handlePrevious}
      >
        <IoIosArrowBack className="text-2xl text-brand-one group-hover:text-grey" />
      </div>
      <div
        className="group absolute right-0 top-0 -translate-y-1/2 transform rounded-full border border-brand-one bg-bg-two p-2 transition-all duration-300 ease-in hover:cursor-pointer hover:bg-brand-one md:top-1/2 md:-translate-x-1/2"
        onClick={handleNext}
      >
        <IoIosArrowForward className="text-2xl text-brand-one group-hover:text-grey" />
      </div>

      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 transform gap-2">
        {projects.map((project, index) => {
          return (
            <div
              key={project.id}
              className={`h-3 w-3 rounded-full border border-brand-one ${activeIndex === index && "h-3 w-10 bg-brand-one"} transition-all duration-300 ease-in hover:cursor-pointer`}
              onClick={() => handleDotClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCarousel;
