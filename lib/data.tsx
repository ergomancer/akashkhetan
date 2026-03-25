import type { ContactData, ProjectData, SectionData, TechData } from "./types";
import {
  SiExpress,
  SiGit,
  SiGithub,
  SiJest,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
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
  { name: "projects", Component: Projects },
  { name: "skills", Component: Skills },
  { name: "about", Component: About },
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

  { tech: "Next.js", level: 85, Logo: SiNextdotjs },
  { tech: "Express", level: 85, Logo: SiExpress },

  { tech: "Prisma", level: 85, Logo: SiPrisma },
  { tech: "PostgreSQL", level: 80, Logo: SiPostgresql },

  { tech: "Jest", level: 85, Logo: SiJest },
  { tech: "Git", level: 90, Logo: SiGit },
];

export const projects: ProjectData[] = [
  {
    name: "whisper",
    description:
      "A minimal system for securely sharing private notes via link and password, without requiring user accounts.",
    list: (
      <ul className="text:lg md:text-xl space-y-2">
        <li>
          Integrated <strong>AI</strong> summarization
        </li>
        <li>
          Implemented expiring notes with automated cleanup via{" "}
          <strong>cron jobs</strong>
        </li>
        <li>
          Designed a <strong>stateless access model</strong> enabling secure
          sharing without authentication
        </li>
      </ul>
    ),
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
    description:
      "A structured full-stack task management system with emphasis on state consistency and data modeling.",
    list: (
      <ul className="text:lg md:text-xl space-y-2">
        <li>
          Designed relational data models for authentication and tasks using{" "}
          <strong>PostgreSQL</strong>
        </li>
        <li>
          Leveraged <strong>Next.js server actions</strong> to handle mutations
          with minimal API overhead
        </li>
        <li>
          Managed UI state for task interactions, ensuring consistency between
          client and backend
        </li>
      </ul>
    ),
    repo: githubProfile + "/diddit",
    deploy: "https://didditbyergomancer.vercel.app",
    tech: [
      "TypeScript",
      "React",
      "TailwindCSS",
      "shadcn/ui",
      "Next.js",
      "PostgreSQL",
    ],
  },
  {
    name: "portfolio",
    description:
      "A developer-focused portfolio built with structured navigation, reusable components, and system-driven design.",
    list: (
      <ul className="text:lg md:text-xl space-y-2">
        <li>
          Implemented <strong>IntersectionObserver</strong>-based active section
          tracking for dynamic navigation highlighting
        </li>
        <li>
          Built reusable UI components using <strong>shadcn/ui</strong> with
          consistent design patterns
        </li>
        <li>
          Engineered smooth, viewport-triggered animations to enhance content
          flow without impacting performance
        </li>
        <li>Optimized for responsiveness and accessibility</li>
      </ul>
    ),
    repo: githubProfile + "/akashkhetan",
    deploy: "https://akashkhetan.vercel.app",
    tech: ["TypeScript", "React", "TailwindCSS", "shadcn/ui", "Next.js"],
  },
];
