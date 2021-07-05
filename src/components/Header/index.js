import React from "react";

function Header() {
  return (
    <header
      id="header"
      class="grid grid-cols-12 min-w-screen bg-dark text-light"
    >
      <h1
        class="
          col-start-2
          md:col-start-3
          xl:col-start-4
          text-4xl
          m-4
          whitespace-nowrap
        "
      >
        Jake Rankin
      </h1>
      <nav
        class="
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
        <div id="nav-holder" class="relative">
          <button
            id="nav-dropdown"
            onclick="dropdownToggle()"
            class="
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
              class="
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
          <div
            id="menu-dropdown"
            class="
              hidden
              absolute
              right-1
              bg-gray-600
              mt-1
              rounded-lg
              pt-2
              p-1
              z-50
            "
          >
            <a
              class="
                block
                p-0.5
                m-0.5
                px-2
                rounded
                text-light
                hover:text-black hover:bg-yellow-200
              "
              href="#about"
            >
              about
            </a>
            <a
              class="
                block
                p-0.5
                m-0.5
                px-2
                rounded
                text-light
                hover:text-black hover:bg-yellow-200
              "
              href="#projects"
            >
              projects
            </a>
            <a
              class="
                block
                p-0.5
                m-0.5
                px-2
                rounded
                text-light
                hover:text-black hover:bg-yellow-200
              "
              href="#contact"
            >
              contact
            </a>
            <a
              class="
                block
                p-0.5
                m-0.5
                px-2
                rounded
                text-light
                hover:text-black hover:bg-yellow-200
              "
              href="resume.pdf"
            >
              resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
