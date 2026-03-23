import "../lib/animations.css";
import { tech } from "@/lib/data";
import TechLogo from "./tech-logo";
import { Item, ItemContent } from "./ui/item";
import { Progress } from "./ui/progress";

export default function Skills() {
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
              variant={"outline"}
              className="motion-safe:animate-skill-enter motion-safe:opacity-0 motion-safe:will-change-[opacity, transform]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ItemContent className="space-y-2">
                <TechLogo
                  tech={tech.tech}
                  className="size-10 md:size-15 pl-2"
                />
                <Progress value={tech.level} className="h-1.5 md:h-2 " />
              </ItemContent>
            </Item>
          );
        })}
      </div>
    </section>
  );
}
