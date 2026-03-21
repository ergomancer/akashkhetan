import type { IconType } from "react-icons";

export type Tech =
  | "ts"
  | "react"
  | "tailwind"
  | "shadcn"
  | "next"
  | "express"
  | "prisma"
  | "postgres";

export type TechData = { tech: Tech; level: number };

export type ProjectData = { name: string; description: string; tech: Tech[] };

export type ContactData = { name: string; link: string; Logo: IconType };
