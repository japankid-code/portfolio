import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import resume from "../../assets/Resume.pdf";

function Resume({ currentSection }) {
  return (
    <section
      id="projects"
      className="grid grid-cols-12 m-2 mt-8 self-center flex-grow min-w-full"
    >
      <h2 className="col-start-1 xl:col-start-2 col-span-3 flex justify-end text-2xl">
        {capitalizeFirstLetter(currentSection.name)}
        <div className="divider m-1 h-8 w-1 rounded bg-dark ml-2"></div>
      </h2>
      <div className="col-span-7 xl:col-span-5 flex m-2 justify-center">
        <a
          href={resume}
          download
          className="bg-pop m-2 py-1 p-4 ring-2 rounded max-w-min "
        >
          <button>{currentSection.description}</button>
        </a>
      </div>
    </section>
  );
}

export default Resume;
