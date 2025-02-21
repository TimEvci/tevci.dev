import type { Site, Metadata, Socials } from "@/types";

export const SITE: Site = {
  NAME: "Timurcan Evci",
  EMAIL: "info@tevci.dev",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Welcome to my personal website! I am a freelance software engineer based in Antalya, Turkey.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/TimEvci",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/timurcan-evci",
  },
];
