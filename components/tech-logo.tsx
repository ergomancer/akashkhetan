import { tech as techData } from "../lib/data";
import type { Tech } from "@/lib/types";
import Link from "next/link";

export default function TechLogo({
  tech,
  className,
}: {
  tech: Tech;
  className: string;
}) {
  const techEntry = techData.find((entry) => entry.tech == tech && true);
  const Logo = techEntry!.Logo;

  return (
    <Link href="#skills">
      <Logo className={`${className}`} />
    </Link>
  );
}
