import "./styles/projects.css";

const Project = function ({ header, description, id }) {
  return (
    <div className="project" id={id}>
      <p className="projectHeader">{header}</p>
      <p className="projectDescription">{description}</p>
    </div>
  );
};

const entries = [
  {
    header: "component-library-react",
    description:
      "A React component library for building reusable UI components. By choice it used a headless approach, allowing developers to style components as per their needs. But currently I am working on exposing the maximum possible internal elements for customizability and adding non-intrusive and clean default style with existing components before I add further components. This is available on npm as component-library-react.",
  },
  {
    header: "countrypppdata",
    description:
      "A script to fetch and parse country PPP data from the World Bank API. It provides a simple way to access and analyze economic data related to purchasing power parity across different countries. This is available on npm as countrypppdata.",
  },
  {
    header: "ergo",
    description:
      "The frontend part of the Ergo-Rito couple. It is a blog based social media application built with React and hosted on Vercel. It is designed to be a platform for sharing knowledge and ideas, facilitating further discussion and collaboration. This is a statement against the wave of short format video based social media platforms that are shown to be detrimental to human cognition and mental health.",
  },
  {
    header: "rito",
    description:
      "The backend part of the Ergo-Rito couple. It is the API engine built with Node.js and Express and hosted on Koyeb. It connects to a PostgreSQL database, which is also hosted on Koyeb, via Prisma. Both Ergo and Rito are in early stages of development, and I am working on them in parallel. So far Rito uses countryppdata to maintain a list of countries and their PPP data, which is intended to be used to offer regional pricing. It also communicates with Ergo, so far limited to sending the available options for various fields on the sign-up form, such as gender, country, avatar, etc. I am also considering adopting a GraphQL approach for the API, but I am still evaluating the pros and cons of this decision.",
  },
];

export default function Projects() {
  return (
    <div id="projects">
      <h1 className="lalezar">
        <span className="accentColor">Projects</span>
        <span>.</span>
      </h1>
      <div className="projectsContainer">
        {entries.map((entry, index) => {
          return (
            <Project
              key={index}
              header={entry.header}
              description={entry.description}
              id={entry.header}
            />
          );
        })}
      </div>
    </div>
  );
}
