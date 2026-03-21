import {
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { Tech } from "@/lib/types";
import Link from "next/link";
import { Button } from "./ui/button";

export default function TechLogo({ tech }: { tech: Tech }) {
  const Logos = {
    ts: SiTypescript,
    react: SiReact,
    shadcn: SiShadcnui,
    tailwind: SiTailwindcss,
    next: SiNextdotjs,
    express: SiExpress,
    prisma: SiPrisma,
    postgres: SiPostgresql,
  };
  const Logo = Logos[tech];

  return (
    <Link href="#skills">
      <Button size={"icon"} variant={"ghost"}>
        <Logo />
      </Button>
    </Link>
  );
}
