import "./styles/About.css";

import { Accordion } from "./Accordion.jsx";

export default function About() {
  return (
    <div id="about">
      <div id="aboutText">
        <h1 className="lalezar">
          <span className="accentColor">About me</span>
          <span>.</span>
        </h1>
        <p>
          I write code, design systems, and question things until they make
          sense — or break cleanly. I started in physics, chasing deep
          questions. Life had other plans, so I taught myself full-stack
          development and built a new path from scratch.
        </p>
        <p>
          No bootcamp, no silver spoon — just a lot of late nights, broken
          builds, and an obsession with doing things right. I care about clean
          logic, meaningful structure, and building things that last (and look
          good doing it).
        </p>
        <p>
          I'm not here to fluff a resume. I'm here to build with clarity,
          collaborate with purpose, and ship work that holds up.
        </p>
        <p>If that sounds like someone you'd work with, let's talk.</p>
      </div>
      <Accordion
        name="accordion"
        entries={[
          // 🧱 Core Development
          [
            "Front-End Development",
            "I build responsive, interactive UIs using React, Redux, TypeScript, and React Router — powered by modern tooling like Vite and Webpack for high-performance delivery.",
          ],
          [
            "Back-End Development",
            "I develop scalable backend systems using Node.js, Express, PostgreSQL, and Prisma — building robust APIs and handling data flows efficiently.",
          ],
          [
            "API Design & Integration",
            "Experienced in designing and consuming REST APIs, and currently exploring GraphQL. I value clarity, consistency, and long-term maintainability in API structures.",
          ],
          [
            "Authentication & Authorization",
            "I implement secure auth systems using JWT and session-based strategies, and understand the trade-offs between client- and server-side authentication.",
          ],
          [
            "Serverless & Edge Functions",
            "I use serverless functions on platforms like Vercel and Netlify to handle backend logic, webhooks, and form submissions with minimal overhead.",
          ],

          // 🧰 Tooling & Infrastructure
          [
            "CI/CD & Deployment",
            "I set up and manage smooth CI/CD pipelines for reliable deployment, using platforms like Vercel, Netlify, and Koyeb to ship fast and often.",
          ],
          [
            "Libraries & Frameworks",
            "Comfortable across a wide range of tools — and quick to adapt — I work with whatever libraries the job calls for, from utility-first to domain-specific ones.",
          ],
          [
            "Version Control",
            "Fluent in Git and GitHub workflows, I collaborate effectively in solo or team environments — from branching strategies to PR reviews.",
          ],
          [
            "Type Systems & Static Analysis",
            "I use TypeScript not just for types, but to enforce architecture with strict tsconfig setups, plus static analysis through ESLint and Prettier.",
          ],

          // 🧠 Architecture & Performance
          [
            "Schema Design & Data Modeling",
            "Skilled in designing normalized and scalable database schemas using PostgreSQL and Prisma — with an eye for query performance and relational integrity.",
          ],
          [
            "State Management Patterns",
            "Alongside Redux, I use modern patterns and tools like React Query and Zustand to manage local and async state effectively.",
          ],
          [
            "Performance Optimization",
            "I apply performance-first practices like code-splitting, lazy loading, memoization, and profiling to build fast, responsive front-ends.",
          ],

          // 🧪 Testing & Reliability
          [
            "Testing & Debugging",
            "I apply Test Driven Development practices and use tools like Jest and Vitest to write reliable code and catch bugs early.",
          ],
          [
            "Form Handling & Validation",
            "I manage form flows using tools like React Hook Form and handle validations with Zod or Yup for both UX and safety.",
          ],

          // 🌐 UX & Accessibility
          [
            "Responsive Design & Accessibility",
            "I build interfaces that not only look good across devices but are also inclusive — applying accessibility-first practices and semantic HTML.",
          ],

          // ✍️ Communication & Collaboration
          [
            "Technical Writing & Documentation",
            "From code comments to full documentation, I aim to write clearly — not just for the machine, but for the next human who reads it.",
          ],
          [
            "Collaboration & Workflow",
            "Comfortable using tools like Notion, Figma, and Slack. Whether async or in sync, I value clear communication and shared understanding.",
          ],

          // 🧩 Problem Solving & Learning
          [
            "Problem Solving & Algorithms",
            "Regularly practice problem-solving through platforms like NeetCode — not just to prep for interviews, but to build sharper intuition.",
          ],
        ].map((entry) => {
          return {
            closed: () => <p>{entry[0]}</p>,
            open: () => <p>{entry[1]}</p>,
          };
        })}
      ></Accordion>
    </div>
  );
}
