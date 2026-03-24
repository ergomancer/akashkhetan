"use client";

import { tech } from "@/lib/data";
import TechLogo from "./tech-logo";
import { Item, ItemContent } from "./ui/item";
import { useEffect, useState } from "react";
import { SkillBar } from "./skill-bar";

export default function Skills({ active }: { active: string }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (active == "skills") setHasAnimated(true);
  }, [active]);
  return (
    <section id="skills" role="skills" className="space-y-5 scroll-mt-20">
      <h2 className="md:hidden text-3xl font-semibold sticky top-0 p-2 backdrop-blur-sm backdrop-brightness-100 backdrop-opacity-100 border-b">
        Skills
      </h2>
      <div className="grid md:grid-cols-2 gap-3 px-5">
        {tech.map((tech, index) => {
          return (
            <Item
              key={tech.tech}
              variant={"muted"}
              className={`md:motion-safe:transition-all md:motion-safe:will-change-[transform, opacity] md:motion-safe:duration-200 md:motion-safe:ease-out md:transition- ${hasAnimated ? "md:motion-safe:translate-y-0 md:motion-safe:opacity-100" : "md:motion-safe:translate-y-10 md:motion-safe:opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ItemContent className="space-y-2">
                <div className="flex flex-row gap-5 items-center">
                  <TechLogo
                    tech={tech.tech}
                    className="size-8 md:size-10 pl-2"
                  />
                  <span className="text-xl font-semibold">{tech.tech}</span>
                </div>
                <SkillBar
                  value={tech.level}
                  className="h-1.5 md:h-2"
                  delay={index * 100 + 200}
                  visible={hasAnimated}
                />
              </ItemContent>
            </Item>
          );
        })}
      </div>
    </section>
  );
}
