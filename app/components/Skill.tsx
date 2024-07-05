import React, { CSSProperties, ComponentType } from "react";

type SkillProps = {
  label: string;
  icon: ComponentType<{
    className?: string;
    style?: CSSProperties;
  }>;
  iconColor?: string;
};

function Skill(props: SkillProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <props.icon className={`text-6xl`} style={{ color: props.iconColor }} />

      <h4 className="text-md font-ibm-plex-mono text-white">{props.label}</h4>
    </div>
  );
}

export default Skill;
