import type { FunctionComponent } from "react";
import type { IconType } from "react-icons";

export type SectionData = {
  name: string;
  Component: FunctionComponent<{ active: string }>;
};

export type Tech =
  | "TypeScript"
  | "React"
  | "TailwindCSS"
  | "shadcn/ui"
  | "Next.js"
  | "Express"
  | "Prisma"
  | "PostgreSQL"
  | "Git"
  | "Bash"
  | "Jest"
  | "Python"
  | "FastAPI"
  | "MongoDB";

export type TechData = { tech: Tech; level: number; Logo: IconType };

export type ProjectData = {
  name: string;
  description: string;
  repo: string;
  deploy: string;
  tech: Tech[];
};

export type ContactData = { name: string; link: string; Logo: IconType };
