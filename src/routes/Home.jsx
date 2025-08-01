import "./styles/Home.css";

let skills = [
  "html",
  "css",
  "tailwind",
  "javascript",
  "eslint",
  "prettier",
  "jest",
  "node",
  "typescript",
  "redux",
  "react",
  "vite",
  "vitest",
  "reactrouter",
  "webpack",
  "next",
  "express",
  "postgresql",
  "prisma",
  "passport",
  "graphql",
  "git",
  "github",
  "linux",
  "bash",
  "docker",
];
import { skillIcons } from "./skillIcons.jsx";

skills = [...skills, ...skills];

export default function Home() {
  return (
    <div id="home">
      <div id="intro">
        <div id="main">
          <div className="lalezar" id="text">
            <p id="hello">
              <span className="accentColor" id="hello">
                Hello
              </span>
              <span id="period">.</span>
            </p>
            <div id="lineAkash">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
              >
                <line x1="0" y1="0" x2="100" y2="0" stroke="currentColor" />
              </svg>
              <p className="jura" id="akash">
                I am Akash
              </p>
            </div>
            <p className="accentColor" id="fullStack">
              Full-Stack Developer
            </p>
          </div>
          <div id="ctaButtons">
            <a href="./resume.pdf" download="./resume.pdf">
              <button id="resume">Resume</button>
            </a>
            <a href="mailto:akashkhetan044@gmail.com">
              <button id="hire">Hire Me</button>
            </a>
          </div>
        </div>
        <div id="profilePic">
          <img src="./profile.jpg" alt="Akash Khetan" />
        </div>
      </div>
      <div id="skillsContainer">
        <div id="skills">
          {skills.map((skill, index) => {
            let SkillIcon = skillIcons[skill];
            return SkillIcon;
          })}
        </div>
      </div>
    </div>
  );
}
