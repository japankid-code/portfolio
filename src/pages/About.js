import React from "react";

import meImg from "../assets/images/me.jpg";

function About() {
  return (
    <section className="bg-light flex-grow">
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
          About
          <div className="divider m-1 h-8 w-1 rounded bg-dark ml-2"></div>
        </h2>
        <p className="col-span-7 xl:col-span-5 flex ml-2">
          I am an innovative web developer adept at creating digital products
          using cutting edge design. Earning a certificate in Full Stack Web
          Development from University of Wisconsin has developed my skills in
          Javascript, React, and Node. Cultivated throughout my academic and
          professional career, my strengths lie in creativity, teamwork, and
          building projects, such as a websocket drawing app, from ideation to
          execution on tight deadlines. With a bachelor’s degree in Fine Art
          from UW-Milwaukee, I have developed an eye for modern design
          principles. This makes me capable of executing visually compelling
          pages that feature user-friendly design and navigation. My sensibility
          for design and teamwork coupled with a clever resourcefulness makes me
          a valuable addition to any team.
        </p>
      </div>
    </section>
  );
}

export default About;
