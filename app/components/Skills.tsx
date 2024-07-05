import React from "react";
import { ContainerWrapper, ScrollBottom, Skill, Title } from "@/components";
import { SKILLS } from "@/constants/skills";

function Skills() {
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

      <div className="grid grid-cols-3 gap-16 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
        {SKILLS.map((skill) => (
          <Skill
            key={skill.name}
            label={skill.name}
            icon={skill.icon}
            iconColor={skill.iconColor}
          />
        ))}
      </div>
    </ContainerWrapper>
  );
}

export default Skills;
