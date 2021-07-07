import React, { useState } from "react";
import "./assets/css/tailwind.css";
import Header from "./components/Header";

function App() {
  const [dropdownState, setDropdownState] = useState("hidden");

  const [sections] = useState([
    {
      name: "about",
      description:
        "I am an innovative web developer adept at creating digital products using cutting edge design. Earning a certificate in Full Stack Web Development from University of Wisconsin has developed my skills in Javascript, React, and Node. Cultivated throughout my academic and professional career, my strengths lie in creativity, teamwork, and building projects, such as a websocket drawing app, from ideation to execution. With a bachelor’s degree in fine arts from UW-Milwaukee, I have developed an eye for modern design principles. This makes me capable of executing visually compelling pages that feature user-friendly design and navigation. My sensibility for design and teamwork coupled with a clever resourcefulness makes me a valuable addition to any team.",
    },
    {
      name: "projects",
      description: "A listing of the projects I have worked on.",
    },
    {
      name: "contact",
      description: "Please submit the following form in order to contact me.",
    },
    {
      name: "resume",
      description: "A copy of my resume.",
    },
  ]);
  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <main className="App">
      <Header
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
      ></Header>
    </main>
  );
}

export default App;
