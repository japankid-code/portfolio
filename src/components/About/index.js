import { div } from "prelude-ls";
import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

import meImg from "../../assets/images/me.jpg";

function About({ currentSection, setCurrentSection }) {
  return (
    <section>
      <div className="grid grid-cols-12 p-4 min-w-full bg-mid">
        <img
          src={meImg}
          className="
              col-start-7
              lg:col-start-8
              col-span-10
              w-64
              h-56
              m-2
              rounded-xl
              opacity-80
            "
          alt="a wild jake standing in the sun"
        />
      </div>
      <div id="about" className="grid grid-cols-12 m-2 self-center">
        <h2 className="col-start-1 xl:col-start-2 col-span-3 flex justify-end text-2xl">
          {capitalizeFirstLetter(currentSection.name)}
          <div className="divider m-1 h-8 w-1 rounded bg-black ml-2"></div>
        </h2>
        <p className="col-span-7 xl:col-span-5 flex ml-2">
          {currentSection.description}
        </p>
      </div>
    </section>
  );
}

export default About;
