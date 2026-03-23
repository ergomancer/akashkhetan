import { useEffect, useState, useRef } from "react";
import { sections } from "./data";

const config = { root: null, rootMargin: "-10% 0% -30% 0%", threshold: 0.5 };

export function useActiveSection() {
  const [active, setActive] = useState(sections[0].name);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const activeSection = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (activeSection) {
        console.log("Active: ", activeSection.target.id);
        setActive(activeSection.target.id);
      }
    }, config);

    if (!ref.current) return;
    else
      ref.current.querySelectorAll("section").forEach((section) => {
        observer.observe(section);
      });

    return () => observer.disconnect();
  }, []);

  return { active, ref };
}
