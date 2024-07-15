export type Project = {
  id: number;
  name: string;
  imageUrl: string;
  author: string;
  date: string;
  externalLink: string;
  techonologies: string[];
};

export const PROJECTS: Project[] = [
  {
    id: 0,
    name: "project name-1",
    imageUrl: "/assets/images/about.jpg",
    author: "Minhazur Rahman",
    date: "Jan 12, 2022",
    techonologies: ["Next.js", "TypeScript", "Redux", "Ant Design"],
    externalLink: "https://github.com/minhazurrony",
  },
  {
    id: 1,
    name: "project name-2",
    imageUrl: "/assets/images/about.jpg",
    author: "Minhazur Rahman",
    date: "Jan 12, 2022",
    techonologies: ["React.js", "TypeScript", "Redux ToolKit", "Tailwind CSS"],
    externalLink: "www.github.com/minhazurrony",
  },
  {
    id: 2,
    name: "project name-3",
    imageUrl: "/assets/images/about.jpg",
    author: "Minhazur Rahman",
    date: "Jan 12, 2022",
    techonologies: ["Next.js", "TypeScript", "Redux", "Material UI"],
    externalLink: "www.github.com/minhazurrony",
  },
  {
    id: 3,
    name: "project name-4",
    imageUrl: "/assets/images/about.jpg",
    author: "Minhazur Rahman",
    date: "Jan 12, 2022",
    techonologies: ["React.js", "TypeScript", "React Query", "Framer Motion"],
    externalLink: "www.github.com/minhazurrony",
  },
];
