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

      <p className="text-md text-white">{props.label}</p>
    </div>
  );
}

export default Skill;
