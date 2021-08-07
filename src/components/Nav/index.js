import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav({
  sections,
  currentSection,
  setCurrentSection,
  setDropdownState,
}) {
  useEffect(() => {
    // change the title of the page according to the section
    document.title = currentSection;
  }, [currentSection]);

  const navItems = sections.map((section, i) => {
    const itemClasses =
      currentSection === sections[i]
        ? "cursor-pointer block p-0.5 m-0.5 px-2 rounded-sm text-dark bg-yellow-300 hover:bg-yellow-400"
        : "cursor-pointer block p-0.5 m-0.5 px-2 rounded-sm text-dark hover:bg-yellow-200";
    return (
      <Link
        to={"/" + section}
        className={itemClasses}
        key={section}
        onClick={(e) => {
          setCurrentSection(section);
          setDropdownState("hidden");
        }}
      >
        {section}
      </Link>
    );
  });

  return (
    <nav
      id="menu-dropdown"
      className="
                  absolute
                  right-1
                  bg-pop
                  mt-1
                  rounded
                  pt-2
                  p-1
                  z-50
                  opacity-95
                  ring-2
                "
    >
      {navItems}
    </nav>
  );
}

export default Nav;
