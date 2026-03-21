import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import TechLogo from "./tech-logo";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" role="projects">
      {projects.map((project) => (
        <Card key={project.name}>
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{project.description}</CardDescription>
          </CardContent>
          <CardFooter>
            {project.tech.map((tech) => (
              <TechLogo tech={tech} key={tech} />
            ))}
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
