import { ComponentType, CSSProperties } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import {
  AntdIcon,
  CssIcon,
  HtmlIcon,
  NextIcon,
  TailwindIcon,
  TsIcon,
} from "@/components/icons";
import { SkillIconKey } from "@/types";

type SkillIcon = ComponentType<{
  className?: string;
  style?: CSSProperties;
}>;

export const SKILL_ICONS: Record<SkillIconKey, SkillIcon> = {
  react: GrReactjs,
  nextjs: NextIcon,
  javascript: IoLogoJavascript,
  typescript: TsIcon,
  redux: SiRedux,
  tailwind: TailwindIcon,
  antd: AntdIcon,
  html: HtmlIcon,
  css: CssIcon,
  git: FaGitAlt,
};
