import Link from "next/link";
import { sections } from "@/lib/data";

export default function Nav({ active }: { active: string }) {
  return (
    <nav id="nav" role="nav" className="md:flex flex-col gap-5 hidden">
      {sections.map((section) => {
        const name = section.name;
        return (
          <Link
            key={name}
            replace
            href={`#${name}`}
            className={
              active == name
                ? "text-xl font-semibold px-10 py-2 text-primary/90"
                : "text-muted-foreground/90 text-lg"
            }
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
