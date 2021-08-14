import React, { useState } from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";

function Header(props) {
  const [dropdownState, setDropdownState] = useState("hidden");

  const sections = ["about", "projects", "resume"];
  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <header
      id="header"
      className="grid grid-cols-12 min-w-screen bg-dark text-light"
    >
      <h1
        className="
          col-start-1
          sm:col-start-1
          md:col-start-2
          xl:col-start-3
          text-4xl
          m-4
          whitespace-nowrap
          cursor-pointer
        "
      >
        <Link to="/" onClick={() => setDropdownState("hidden")}>
          Jake Rankin
        </Link>
      </h1>
      <div
        className="
          col-start-12
          md:col-start-11
          xl:col-start-10
          self-center
          flex
          space-between
          text-sm
        "
      >
        <div id="nav-btn-holder" className="relative">
          <button
            id="nav-btn"
            onClick={() =>
              dropdownState === "hidden"
                ? setDropdownState("")
                : setDropdownState("hidden")
            }
            className="
              block
              h-8
              w-8
              bg-light
              rounded-lg
              outline-none
              focus:outline-none
            "
          >
            <i
              className="
                fas
                fa-bars
                rounded
                outline-none
                focus:outline-none
                mx-1
                text-dark
              "
            ></i>
          </button>
          <div className={dropdownState}>
            <Nav
              setDropdownState={setDropdownState}
              sections={sections}
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
            ></Nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
