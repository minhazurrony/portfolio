import React, { ComponentType } from "react";

type SkillProps = {
  label: string;
  icon: ComponentType<{
    className?: string;
  }>;
};

function Skill(props: SkillProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="rounded-2xl border border-brand-one bg-bg-two p-6">
        <props.icon className="text-4xl text-brand-one" />
      </div>
      <h4 className="font-ibm-plex-mono text-xl text-white">{props.label}</h4>
    </div>
  );
}

export default Skill;
