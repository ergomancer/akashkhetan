import {
  SiExpress,
  SiFastapi,
  SiGit,
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
} from "react-icons/si";
import type { Tech } from "@/lib/types";
import Link from "next/link";

export default function TechLogo({
  tech,
  className,
}: {
  tech: Tech;
  className: string;
}) {
  const Logos = {
    ts: SiTypescript,
    react: SiReact,
    shadcn: SiShadcnui,
    tailwind: SiTailwindcss,
    next: SiNextdotjs,
    express: SiExpress,
    prisma: SiPrisma,
    postgres: SiPostgresql,
    mongo: SiMongodb,
    python: SiPython,
    fastapi: SiFastapi,
    jest: SiJest,
    git: SiGit,
    bash: SiGnubash,
  };
  const Logo = Logos[tech];

  return (
    <Link href="#skills">
      <Logo className={`${className}`} />
    </Link>
  );
}
