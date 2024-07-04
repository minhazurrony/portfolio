import React, { ComponentType } from "react";
import { ContainerWrapper, ScrollBottom, Skill, Title } from "@/components";
import { SKILLS } from "@/constants/skills";

function Skills() {
  return (
    <ContainerWrapper className="bg-bg-one p-[128px]">
      <div className="mb-[128px] hidden lg:block">
        <ScrollBottom />
      </div>
      <div className="mb-32">
        <Title />
      </div>

      <div className="grid grid-cols-2 gap-16 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {SKILLS.map((skill) => (
          <Skill
            key={skill.name}
            label={skill.name}
            icon={skill.icon as ComponentType}
          />
        ))}
      </div>
    </ContainerWrapper>
  );
}

export default Skills;
