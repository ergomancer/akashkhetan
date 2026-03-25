import type { FunctionComponent, ReactElement } from "react";
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
  | "Jest";

export type TechData = { tech: Tech; level: number; Logo: IconType };

export type ProjectData = {
  name: string;
  description: string;
  list: ReactElement;
  repo: string;
  deploy: string;
  tech: Tech[];
};

export type ContactData = { name: string; link: string; Logo: IconType };
