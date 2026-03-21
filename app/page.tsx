import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row">
      <div>
        <Intro />
        {/** TODO: Nav here */}
        <Contact />
      </div>
      <div>
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
