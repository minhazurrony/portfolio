import React, { ComponentType } from "react";
import { FaHtml5, FaCss3, FaSquareGit } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiAntdesign,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";

export type Skills = {
  name: string;
  icon: ComponentType<{
    className: string;
  }>;
}[];

export const SKILLS: Skills = [
  {
    name: "React.js",
    icon: GrReactjs,
  },
  {
    name: "Next.js",
    icon: TbBrandNextjs,
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Redux",
    icon: SiRedux,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Ant Design",
    icon: SiAntdesign,
  },
  {
    name: "HTML",
    icon: FaHtml5,
  },
  {
    name: "CSS",
    icon: FaCss3,
  },
  {
    name: "Git",
    icon: FaSquareGit,
  },
];
