import React from "react";
import { ContainerWrapper, ScrollBottom, Title } from "@/components/common";
import { PROJECTS } from "@/content/projects";
import ProjectCarousel from "./components/project-carousel";

function Projects() {
  return (
    <ContainerWrapper className="bg-bg-one p-8 md:p-16 lg:p-[128px]">
      <div className="mb-[128px] hidden lg:block">
        <ScrollBottom />
      </div>
      <div className="mb-32">
        <Title
          title="Projects"
          subtitle="I had the please of working with these awesome projects"
        />
      </div>
      <div className="flex justify-center">
        <ProjectCarousel projects={PROJECTS} />
      </div>
    </ContainerWrapper>
  );
}

export default Projects;
