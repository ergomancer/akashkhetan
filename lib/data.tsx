import type { ContactData, ProjectData, SectionData, TechData } from "./types";
import { SiGithub, SiX } from "react-icons/si";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa6";

export const sections: SectionData[] = [
  { name: "about", Component: About },
  { name: "skills", Component: Skills },
  { name: "projects", Component: Projects },
];

export const githubProfile = "https://github.com/ergomancer";

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
    Logo: FaLinkedin,
  },
  {
    name: "mail",
    link: "mailto:akashkhetan044@gmail.com",
    Logo: FaEnvelope,
  },
  {
    name: "phone",
    link: "tel:+917003686821",
    Logo: FaPhone,
  },
];

export const tech: TechData[] = [
  { tech: "ts", level: 90 },
  { tech: "react", level: 90 },

  { tech: "tailwind", level: 90 },
  { tech: "shadcn", level: 95 },

  { tech: "jest", level: 85 },
  { tech: "next", level: 85 },

  { tech: "express", level: 85 },
  { tech: "prisma", level: 85 },

  { tech: "postgres", level: 80 },
  { tech: "mongo", level: 50 },

  { tech: "python", level: 85 },
  { tech: "fastapi", level: 75 },

  { tech: "git", level: 90 },
  { tech: "bash", level: 85 },
];

export const projects: ProjectData[] = [
  {
    name: "whisper",
    description: "A fullstack secret note sharing app",
    repo: githubProfile + "/whisper",
    deploy: "https://whisper-by-ergomancer.vercel.app",
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
    repo: githubProfile + "/diddit",
    deploy: "https://didditbyergomancer.vercel.app",
    tech: ["ts", "react", "tailwind", "shadcn", "next", "express", "postgres"],
  },
  {
    name: "portfolio",
    description: "This portfolio site",
    repo: githubProfile + "/akashkhetan",
    deploy: "https://akashkhetan.vercel.app",
    tech: ["ts", "react", "tailwind", "shadcn", "next"],
  },
];
