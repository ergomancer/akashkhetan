"use client";

import { useState, useEffect } from "react";
import { Progress } from "./ui/progress";

export function SkillBar({
  value,
  delay,
  className,
  visible,
}: {
  value: number;
  delay: number;
  className: string;
  visible: boolean;
}) {
  const [progress, setProgress] = useState(value);

  useEffect(() => {
    if (!visible) return;
    else {
      setProgress(0);
      const t = setTimeout(() => setProgress(value), delay);
      return () => clearTimeout(t);
    }
  }, [value, delay, visible]);

  return (
    <Progress
      value={progress}
      className={`
        md:[&>div]:motion-safe:transition-all
        md:[&>div]:motion-safe:duration-300
        md:[&>div]:motion-safe:ease-out
        md:[&>div]:motion-safe:will-change-auto
      ${className}`}
    />
  );
}
