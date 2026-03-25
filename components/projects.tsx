import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import TechLogo from "./tech-logo";
import { projects } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/button";
import { SiGithub } from "react-icons/si";
import { LuScreenShare } from "react-icons/lu";

export default function Projects() {
  return (
    <section id="projects" role="projects" className="space-y-5 scroll-mt-20">
      <h2 className="md:hidden text-3xl font-semibold sticky top-0 p-2 backdrop-blur-sm backdrop-brightness-100 backdrop-opacity-100 border-b">
        Projects
      </h2>
      <div className="px-5 space-y-10">
        {projects.map((project) => (
          <Card key={project.name}>
            <CardHeader className="border-b">
              <CardTitle className="font-bold text-xl md:text-2xl">
                {project.name.charAt(0).toUpperCase() + project.name.slice(1)}
              </CardTitle>
              <CardDescription className=" text-md md:text-lg">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {project.list}
              <CardAction className="flex flex-col gap-3 items-stretch">
                <Button
                  variant={"outline"}
                  className="md:hover:bg-primary md:hover:text-background"
                >
                  <Link href={project.repo} className="flex gap-2">
                    <SiGithub className="size-4 md:size-6" />
                    <span>Github Repo</span>
                  </Link>
                </Button>
                <Button
                  variant={"outline"}
                  className="md:hover:bg-primary md:hover:text-background"
                >
                  <Link href={project.deploy} className="flex gap-2">
                    <LuScreenShare className="size-4 md:size-6" />
                    <span>Live Demo</span>
                  </Link>
                </Button>
              </CardAction>
            </CardContent>
            <CardFooter className="flex gap-2 border-t">
              {project.tech.map((tech) => (
                <TechLogo tech={tech} key={tech} className="size-5 md:size-7" />
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
