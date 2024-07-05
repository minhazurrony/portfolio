import React from "react";
import { ContainerWrapper, ScrollBottom, Timeline, Title } from "@/components";
import { EXPERIENCES } from "@/constants/experience";

function Experiences() {
  return (
    <ContainerWrapper className="bg-bg-two p-[128px]">
      <div className="mb-[128px] hidden lg:block">
        <ScrollBottom />
      </div>
      <div className="mb-32">
        <Title
          title="Experience"
          subtitle="Here is a quick summary of my most recent experiences"
        />
      </div>

      <Timeline data={EXPERIENCES} />
    </ContainerWrapper>
  );
}

export default Experiences;
