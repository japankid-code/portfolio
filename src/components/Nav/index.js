import React from "react";

function Nav(props) {
  const { sections, currentSection, setCurrentSection, setDropdownState } =
    props;

  const navItems = sections.map((section, i) => {
    const itemClasses =
      currentSection.name === section.name
        ? "cursor-pointer block p-0.5 m-0.5 px-2 rounded-sm text-dark bg-yellow-300 hover:bg-yellow-400"
        : "cursor-pointer block p-0.5 m-0.5 px-2 rounded-sm text-dark hover:bg-yellow-200";
    return (
      <a
        href="/"
        id={section.name}
        className={itemClasses}
        key={section.name}
        onClick={(e) => {
          e.preventDefault();
          setCurrentSection(section);
          setDropdownState("hidden");
        }}
      >
        {section.name}
      </a>
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
