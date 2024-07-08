import React from "react";
import {
  ProjectCard,
  ContainerWrapper,
  ScrollBottom,
  Title,
} from "@/components";

function Projects() {
  return (
    <ContainerWrapper className="bg-bg-one p-[128px]">
      <div className="mb-[128px] hidden lg:block">
        <ScrollBottom />
      </div>
      <div className="mb-32">
        <Title
          title="Projects"
          subtitle="I had the please of working with these awesome projects"
        />
      </div>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          name="movie info hub"
          imageUrl="/assets/images/about.jpg"
          idx={0}
        />
        <ProjectCard
          name="covid-19 stats"
          imageUrl="/assets/images/about.jpg"
          idx={1}
        />
      </div>
    </ContainerWrapper>
  );
}

export default Projects;
