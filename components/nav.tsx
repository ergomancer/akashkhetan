import Link from "next/link";
import { sections } from "@/lib/data";

export default function Nav({ active }: { active: string }) {
  return (
    <nav id="nav" role="nav" className="md:flex flex-col gap-5 hidden text-lg">
      {sections.map((section) => {
        const name = section.name;
        return (
          <Link
            key={name}
            replace
            href={`#${name}`}
            className={`md:motion-safe:transition-[transform, color] md:motion-safe:duration-300 md:motion-safe:ease-in md:motion-safe:will-change-[transform, color] ${
              active == name
                ? "text-primary md:motion-safe:translate-x-20 md:motion-safe:scale-115"
                : "text-muted-foreground md:motion-safe:translate-x-0 md:motion-safe:scale-100"
            }`}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
