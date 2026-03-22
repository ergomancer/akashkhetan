import { tech } from "@/lib/data";
import TechLogo from "./tech-logo";
import { Progress } from "./ui/progress";
import { Item, ItemContent } from "./ui/item";

export default function Skills() {
  return (
    <section id="skills" role="skills" className="space-y-5">
      <h2 className="md:hidden text-3xl font-semibold sticky top-0 p-2 backdrop-blur-sm backdrop-brightness-100 backdrop-opacity-100 border-b">
        Skills
      </h2>
      <div className="grid md:grid-cols-2 gap-3 px-5">
        {tech.map((tech) => {
          return (
            <Item key={tech.tech} className="border">
              <ItemContent className="space-y-2">
                <TechLogo
                  tech={tech.tech}
                  className="size-10 md:size-15 pl-2"
                />
                <Progress value={tech.level} className="h-1.5 md:h-2" />
              </ItemContent>
            </Item>
          );
        })}
      </div>
    </section>
  );
}
