import React from "react";

// import dingo0 from "../assets/images/dingo/0.png";
// import dingo1 from "../assets/images/dingo/1.png";
// import dingo2 from "../assets/images/dingo/2.png";
// import dingo3 from "../assets/images/dingo/3.png";
// import dingo4 from "../assets/images/dingo/4.png";
// import dingo5 from "../assets/images/dingo/4.png";
// import dingo6 from "../assets/images/dingo/4.png";
// import drawWithFrendz0 from "../assets/images/draw-with-friends/0.png";
// import drawWithFrendz1 from "../assets/images/draw-with-friends/1.png";
// import drawWithFrendz2 from "../assets/images/draw-with-friends/2.png";
// import drawWithFrendz3 from "../assets/images/draw-with-friends/3.png";
// import theWineCage0 from "../assets/images/the-wine-cage/0.png";
// import theWineCage1 from "../assets/images/the-wine-cage/1.png";
// import theWineCage2 from "../assets/images/the-wine-cage/2.png";
// import weatherKid from "../assets/images/weather-kid.png";

function Projects() {
  const projects = [
    {
      name: "Dingo",
      link: "https://dingo-dog-walker.herokuapp.com/",
      // image: [dingo0, dingo1, dingo2, dingo3, dingo4, dingo5, dingo6],
      gist: "MERN stack React App",
    },
    {
      name: "Draw With Friends",
      link: "https://draw-with-friendz.herokuapp.com/",
      // image: [
      //   drawWithFrendz0,
      //   drawWithFrendz1,
      //   drawWithFrendz2,
      //   drawWithFrendz3,
      // ],
      gist: "Complete MVC Application",
    },
    {
      name: "The Wine Cage",
      link: "https://bootcamp-project1.github.io/The-wine-cage/",
      //image: [theWineCage0, theWineCage1, theWineCage2],
      gist: "Collaborative server side API project",
    },
    {
      name: "Weather Kid",
      link: "https://japankid-code.github.io/weather-kid/",
      //image: [weatherKid],
      gist: "vanilla JS app",
    },
  ];

  const projectCards = projects.map(({ name, link, image, gist }, i) => {
    return (
      <article className="relative m-2 col-span-2" key={i}>
        <a className="" href={link} target="_blank" rel="noreferrer" alt={name}>
          <label
            className="
                  absolute
                  z-10
                  bottom-8
                  cursor-pointer
                  right-2
                  py-2
                  px-4
                  bg-mid
                  text-light
                  rounded-tl-md rounded-bl-md
                "
          >
            <h3 className="text-lg">{name}</h3>
            <span className="flex text-sm justify-center whitespace-wrap">
              {gist}
            </span>
          </label>
          <div className="flex p-2 bg-mid rounded-xl">
            <img
              src={image}
              className="
                    rounded-lg
                    opacity-90
                    hover:opacity-100
                    h-full
                    w-full
                    object-cover
                  "
              alt="draw with friends"
            />
          </div>
        </a>
      </article>
    );
  });

  return (
    <section
      id="projects"
      className="grid grid-cols-12 m-2 mt-8 self-center flex-grow min-w-full"
    >
      <h2 className="col-start-1 xl:col-start-2 col-span-3 flex justify-end text-2xl">
        Projects
        <div className="divider m-1 h-8 w-1 rounded bg-dark ml-2"></div>
      </h2>
      <div className="col-span-7 xl:col-span-5 flex flex-col m-2">
        <span>A listing of the projects I have worked on.</span>
        <div id="" className="col-span-7 xl:col-span-5 grid grid-cols-2 ml-2">
          {projectCards}
        </div>
      </div>
    </section>
  );
}

export default Projects;
