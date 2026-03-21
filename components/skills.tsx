import { tech } from "@/lib/data";
import TechLogo from "./tech-logo";
import { Progress } from "./ui/progress";

export default function Skills() {
  return (
    <section id="skills" role="skills">
      {tech.map((tech) => {
        return (
          <div key={tech.tech}>
            <TechLogo tech={tech.tech} />
            <Progress value={tech.level} />
          </div>
        );
      })}
    </section>
  );
}
