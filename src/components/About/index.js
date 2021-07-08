import React from "react";

function About({ currentSection }) {
  return (
    <section id="about" className="grid grid-cols-12 m-2 self-center">
      <h2 className="col-start-1 xl:col-start-2 col-span-3 flex justify-end text-xl">
        {currentSection.name}
        <div className="divider m-1 h-8 w-1 rounded bg-black ml-2"></div>
      </h2>
      <p className="col-span-7 xl:col-span-5 flex ml-2">
        {currentSection.description}
      </p>
    </section>
  );
}

export default About;
