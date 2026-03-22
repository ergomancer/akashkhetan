"use client";

import Intro from "@/components/intro";
import Contact from "@/components/contact";
import { sections } from "@/lib/data";
import Nav from "@/components/nav";
import { useActiveSection } from "@/lib/hook";

export default function Home() {
  const { active, ref } = useActiveSection();
  return (
    <main className="grid md:grid-cols-2 items-start text-lg">
      <div className="justify-self-center md:h-screen md:sticky md:top-0 flex flex-col gap-10 justify-between items-center py-10 md:p-20 px-5">
        <div className="place-self-start space-y-15">
          <Intro />
          <Nav active={active} />
        </div>
        <Contact />
      </div>
      <div
        ref={ref}
        className="justify-self-start max-w-2xl py-10 md:py-20 space-y-25 md:space-y-40"
      >
        {sections.map((section) => {
          const Section = section.Component;
          return <Section key={section.name} />;
        })}
      </div>
    </main>
  );
}
