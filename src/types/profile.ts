export type Stat = {
  title: string;
  count: number;
};

export type Profile = {
  name: string;
  title: string;
  avatar: string;
  email: string;
  location: string;
  availability: string;
  githubDisplay: string;
  cvUrl: string;
  heroTags: string[];
  stats: Stat[];
  socials: {
    linkedin: string;
    github: string;
    facebook: string;
  };
};
