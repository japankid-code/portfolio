import React, { useEffect } from "react";
import Nav from "../Nav";

function Header(props) {
  const {
    sections,
    currentSection,
    setCurrentSection,
    dropdownState,
    setDropdownState,
  } = props;
  const toggleDropdown = (e) => {
    if (dropdownState === "hidden") {
      setDropdownState("");
      return;
    }
    setDropdownState("hidden");
  };

  useEffect(() => {
    // change the title of the page according to the section
  }, [currentSection]);

  const nameClickHandler = () => {
    setDropdownState("hidden");
    // setCurrentSection(sections[0]);
  };

  return (
    <header
      id="header"
      className="grid grid-cols-12 min-w-screen bg-gray-200 text-light"
    >
      <h1
        className="
          col-start-1
          sm:col-start-2
          md:col-start-3
          xl:col-start-4
          text-4xl
          m-4
          whitespace-nowrap
          cursor-pointer
        "
      >
        <a href="/about" onClick={nameClickHandler}>
          Jake Rankin
        </a>
      </h1>
      <div
        className="
          col-start-12
          md:col-start-11
          xl:col-start-10
          self-center
          flex
          space-between
          m-2
          text-sm
        "
      >
        <div id="nav-btn-holder" className="relative">
          <button
            id="nav-btn"
            onClick={toggleDropdown}
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
              sections={sections}
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
              setDropdownState={setDropdownState}
              toggleDropdown={toggleDropdown}
            ></Nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
