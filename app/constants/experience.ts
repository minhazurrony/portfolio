type Experiences = {
  organization: string;
  designation: string;
  serviceYearRange: string;
  achievements: string[];
}[];

export const EXPERIENCES: Experiences = [
  {
    organization: "ShopUp Limited",
    designation: "Frontend Engineer",
    serviceYearRange: "Oct 2021 - Dec 2023",
    achievements: [
      "Developed an internal finance tool that is handling more than 10 crore transactions monthly",
      "Established a centralized KYC tool which helped to reduce 50% of paperwork and facilitate easy-going member onboarding.",
      "Built a DSR tracking tool that resulted in an 8% improvement in accountability.",
    ],
  },
  {
    organization: "Japan Marketing & Consultancy Ltd.",
    designation: "Frontend Engineer",
    serviceYearRange: "Feb 2021 - Sep 2021",
    achievements: [
      "Developed a hospital management system that allows patients to schedule appointments conveniently, resulting in a 12% increase in overall patient experience.",
      "Built attendance management, personal leave, and custom holiday tracking which reduced 7% of administrative burden.",
      "Developed appointment scheduling that helped utilize 300+ resources efficiently.",
    ],
  },
  {
    organization: "Shorol Limited",
    designation: "Frontend Engineer",
    serviceYearRange: "Mar 2019 - Oct 2021",
    achievements: [
      " Developed an MVP fintech app that expanded access to credit 500+ individuals without collateral or credit history.",
      "Built a tool for the Ministry of Health and Family Welfare to support 64+ Civil Surgeons.",
      "Built user-friendly UIs to facilitate better UX resulting in a 4% increase in product engagement.",
    ],
  },
];
