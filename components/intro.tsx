import Link from "next/link";

export default function Intro() {
  return (
    <section id="intro" role="intro" className="space-y-5">
      <p className="text-2xl">Hi! I&apos;m...</p>
      <h1 className="text-4xl md:text-5xl font-bold">
        <Link href="/">Akash Khetan.</Link>
      </h1>
      <h2 className="text-2xl font-semibold">Fullstack Developer.</h2>
      <h4 className="text-md">
        Physicist. <br />
        Quantum Computing Geek.
      </h4>
      <h3 className="text-xl">
        I build modular, API-first systems that scale. <br /> In code and in
        thought.
      </h3>
    </section>
  );
}
