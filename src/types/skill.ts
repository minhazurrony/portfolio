export type SkillIconKey =
  | "react"
  | "nextjs"
  | "javascript"
  | "typescript"
  | "redux"
  | "tailwind"
  | "antd"
  | "html"
  | "css"
  | "git";

export type Skill = {
  name: string;
  icon: SkillIconKey;
  iconColor?: string;
};
