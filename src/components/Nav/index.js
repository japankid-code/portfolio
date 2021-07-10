import React from "react";

function Nav(props) {
  const { sections, currentSection, setCurrentSection, setDropdownState } =
    props;

  const navItems = sections.map((section, i) => {
    const itemClasses =
      currentSection.name === section.name
        ? "cursor-pointer block p-0.5 m-0.5 px-2 rounded-sm text-light hover:text-black bg-yellow-200 hover:bg-yellow-300"
        : "cursor-pointer block p-0.5 m-0.5 px-2 rounded-sm text-light hover:text-black hover:bg-yellow-100";
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
                  bg-gray-400
                  mt-0.5
                  rounded
                  pt-2
                  p-1
                  z-50
                "
    >
      {navItems}
    </nav>
  );
}

export default Nav;
