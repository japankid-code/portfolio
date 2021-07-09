import React, { useState } from "react";
import "./assets/css/tailwind.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [dropdownState, setDropdownState] = useState("hidden");
  const [sections] = useState([
    {
      name: "about",
      description:
        "I am an innovative web developer adept at creating digital products using cutting edge design. Earning a certificate in Full Stack Web Development from University of Wisconsin has developed my skills in Javascript, React, and Node. Cultivated throughout my academic and professional career, my strengths lie in creativity, teamwork, and building projects, such as a websocket drawing app, from ideation to execution on tight deadlines. With a bachelor’s degree in Fine Art from UW-Milwaukee, I have developed an eye for modern design principles. This makes me capable of executing visually compelling pages that feature user-friendly design and navigation. My sensibility for design and teamwork coupled with a clever resourcefulness makes me a valuable addition to any team.",
    },
    {
      name: "projects",
      description: "A listing of the projects I have worked on.",
    },
    {
      name: "resume",
      description: "Download",
    },
    {
      name: "contact",
      description: "Please submit the following form in order to contact me.",
    },
  ]);
  let routedSection;
  let location = window.location.pathname.replace("/", "");

  if (location === sections[0].name) {
    routedSection = sections[0];
  } else if (location === sections[1].name) {
    routedSection = sections[1];
  } else if (location === sections[2].name) {
    routedSection = sections[2];
  } else if (location === sections[3].name) {
    routedSection = sections[3];
  }

  const [currentSection, setCurrentSection] = useState(routedSection);

  return (
    <main className="App">
      <Header
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
      />
      <Router>
        <Route path="/about">
          <About
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
          ;
        </Route>
        <Route path="/projects">
          <Projects
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
          ;
        </Route>
        <Route path="/contact">
          <Contact
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
          ;
        </Route>
        <Route path="/resume">
          <Resume
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
          ;
        </Route>
      </Router>
    </main>
  );
}

export default App;
