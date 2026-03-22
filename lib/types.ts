import type { FunctionComponent } from "react";
import type { IconType } from "react-icons";

export type SectionData = {
  name: string;
  Component: FunctionComponent;
};

export type Tech =
  | "ts"
  | "react"
  | "tailwind"
  | "shadcn"
  | "next"
  | "express"
  | "prisma"
  | "postgres"
  | "git"
  | "bash"
  | "jest"
  | "python"
  | "latex"
  | "arduino"
  | "fastapi"
  | "mongo";

export type TechData = { tech: Tech; level: number };

export type ProjectData = {
  name: string;
  description: string;
  repo: string;
  deploy: string;
  tech: Tech[];
};

export type ContactData = { name: string; link: string; Logo: IconType };
