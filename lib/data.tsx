import { TiSocialLinkedin } from "react-icons/ti";
import type { ContactData, ProjectData, TechData } from "./types";
import { SiGithub, SiX } from "react-icons/si";

export const githubProfile = "https://github.com/ergomancer";

export const tech: TechData[] = [
  { tech: "ts", level: 80 },
  { tech: "react", level: 80 },
  { tech: "tailwind", level: 80 },
  { tech: "shadcn", level: 90 },
  { tech: "next", level: 80 },
  { tech: "express", level: 70 },
  { tech: "prisma", level: 70 },
  { tech: "postgres", level: 70 },
];

export const projects: ProjectData[] = [
  {
    name: "whisper",
    description: "A fullstack secret note sharing app",
    tech: [
      "ts",
      "react",
      "tailwind",
      "shadcn",
      "next",
      "express",
      "postgres",
      "prisma",
    ],
  },
  {
    name: "diddit",
    description: "A fullstack task management app",
    tech: ["ts", "react", "tailwind", "shadcn", "next", "express", "postgres"],
  },
];

export const contacts: ContactData[] = [
  {
    name: "github",
    link: githubProfile,
    Logo: SiGithub,
  },
  {
    name: "x",
    link: "https://x.com/ergomancer",
    Logo: SiX,
  },
  {
    name: "linkedin",
    link: "https://linkedin.com/in/ergomancer",
    Logo: TiSocialLinkedin,
  },
];
