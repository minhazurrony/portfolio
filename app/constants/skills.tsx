import { ComponentType } from "react";
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
} from "../../public/assets/icons";

export type Skills = {
  name: string;
  icon: ComponentType<{
    className?: string;
  }>;
  iconColor?: string;
}[];

export const SKILLS: Skills = [
  {
    name: "React.js",
    icon: GrReactjs,
    iconColor: "#5ED2F3",
  },
  {
    name: "Next.js",
    icon: NextIcon,
    iconColor: "#000000",
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
    iconColor: "#EFD81A",
  },
  {
    name: "TypeScript",
    icon: TsIcon,
    iconColor: "#2F73BF",
  },
  {
    name: "Redux",
    icon: SiRedux,
    iconColor: "#7248B6",
  },
  {
    name: "Tailwind",
    icon: TailwindIcon,
    iconColor: "#37BCF8",
  },
  {
    name: "AntD",
    icon: AntdIcon,
    iconColor: "#26C2FF",
  },
  {
    name: "HTML",
    icon: HtmlIcon,
    iconColor: "#DC4A25",
  },
  {
    name: "CSS",
    icon: CssIcon,
    iconColor: "#244BDD",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    iconColor: "#E84F31",
  },
];
