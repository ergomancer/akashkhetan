import { SPAContainer } from "component-library-react";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Projects from "./routes/Projects.jsx";
import Contact from "./routes/Contact.jsx";

import "./App.css";

export default function App() {
  return (
    <SPAContainer
      name="app"
      pages={[
        ["Akash Khetan", "/", <Home />],
        ["About", "/about", <About />],
        ["Projects", "/projects", <Projects />],
        ["Contact", "/contact", <Contact />],
      ]}
    />
  );
}
