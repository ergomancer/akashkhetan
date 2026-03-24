import type { ContactData, ProjectData, SectionData, TechData } from "./types";
import {
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGnubash,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiX,
} from "react-icons/si";
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
  { tech: "TypeScript", level: 90, Logo: SiTypescript },
  { tech: "React", level: 90, Logo: SiReact },

  { tech: "TailwindCSS", level: 90, Logo: SiTailwindcss },
  { tech: "shadcn/ui", level: 95, Logo: SiShadcnui },

  { tech: "Jest", level: 85, Logo: SiJest },
  { tech: "Next.js", level: 85, Logo: SiNextdotjs },

  { tech: "Express", level: 85, Logo: SiExpress },
  { tech: "Prisma", level: 85, Logo: SiPrisma },

  { tech: "PostgreSQL", level: 80, Logo: SiPostgresql },
  { tech: "MongoDB", level: 50, Logo: SiMongodb },

  { tech: "Python", level: 85, Logo: SiPython },
  { tech: "FastAPI", level: 75, Logo: SiFastapi },

  { tech: "Git", level: 90, Logo: SiGit },
  { tech: "Bash", level: 85, Logo: SiGnubash },
];

export const projects: ProjectData[] = [
  {
    name: "whisper",
    description: "A fullstack secret note sharing app",
    repo: githubProfile + "/whisper",
    deploy: "https://whisper-by-ergomancer.vercel.app",
    tech: [
      "TypeScript",
      "React",
      "TailwindCSS",
      "shadcn/ui",
      "Next.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    name: "diddit",
    description: "A fullstack task management app",
    repo: githubProfile + "/diddit",
    deploy: "https://didditbyergomancer.vercel.app",
    tech: [
      "TypeScript",
      "React",
      "TailwindCSS",
      "shadcn/ui",
      "Next.js",
      "Express",
      "PostgreSQL",
    ],
  },
  {
    name: "portfolio",
    description: "This portfolio site",
    repo: githubProfile + "/akashkhetan",
    deploy: "https://akashkhetan.vercel.app",
    tech: ["TypeScript", "React", "TailwindCSS", "shadcn/ui", "Next.js"],
  },
];
