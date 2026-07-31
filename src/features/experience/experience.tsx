import React from "react";
import { ContainerWrapper, ScrollBottom, Title } from "@/components/common";
import { EXPERIENCES } from "@/content/experience";
import Timeline from "./components/timeline";

function Experience() {
  return (
    <ContainerWrapper className="bg-bg-two p-8 md:p-16 lg:p-[128px]">
      <div className="mb-[128px] hidden lg:block">
        <ScrollBottom />
      </div>
      <div className="mb-32">
        <Title
          title="Experience"
          subtitle="Exploring passion through professional journey"
        />
      </div>

      <Timeline data={EXPERIENCES} />
    </ContainerWrapper>
  );
}

export default Experience;
