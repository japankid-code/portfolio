import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import dingo0 from "../assets/images/dingo/0.png";
import dingo1 from "../assets/images/dingo/1.png";
import dingo2 from "../assets/images/dingo/2.png";
import dingo3 from "../assets/images/dingo/3.png";
import dingo4 from "../assets/images/dingo/4.png";
import dingo5 from "../assets/images/dingo/4.png";
import dingo6 from "../assets/images/dingo/4.png";
import drawWithFrendz0 from "../assets/images/draw-with-friends/0.png";
import drawWithFrendz1 from "../assets/images/draw-with-friends/1.png";
import drawWithFrendz2 from "../assets/images/draw-with-friends/2.png";
import theWineCage0 from "../assets/images/the-wine-cage/0.png";
import theWineCage1 from "../assets/images/the-wine-cage/1.png";
import theWineCage2 from "../assets/images/the-wine-cage/2.png";
import weatherKid0 from "../assets/images/weather-kid/0.png";
import weatherKid1 from "../assets/images/weather-kid/1.png";
import weatherKid2 from "../assets/images/weather-kid/2.png";

function Projects() {
  const projects = [
    {
      name: "Dingo",
      deploy_link: "https://dingo-dog-walker.herokuapp.com/",
      repo_link: "https://github.com/bc-mern-stack/dingo",
      images: [dingo0, dingo1, dingo2, dingo3, dingo4, dingo5, dingo6],
      gist: "MERN stack React App",
    },
    {
      name: "Draw With Friends",
      deploy_link: "https://draw-with-friendz.herokuapp.com/",
      repo_link: "https://github.com/japankid-code/draw-stuff",
      images: [drawWithFrendz0, drawWithFrendz1, drawWithFrendz2],
      gist: "Complete MVC Application",
    },
    {
      name: "The Wine Cage",
      deploy_link: "https://bootcamp-project1.github.io/The-wine-cage/",
      repo_link: "https://github.com/bootcamp-project1/The-wine-cage",
      images: [theWineCage0, theWineCage1, theWineCage2],
      gist: "Collaborative server side API project",
    },
    {
      name: "Weather Kid",
      deploy_link: "https://japankid-code.github.io/weather-kid/",
      repo_link: "https://github.com/japankid-code/weather-kid",
      images: [weatherKid0, weatherKid1, weatherKid2],
      gist: "vanilla JS app",
    },
  ];

  function carousel(images) {
    return (
      <Carousel
        className="rounded-lg"
        images={images}
        dots={true}
        infiniteLoop={true}
        autoplay={true}
        autoplaySpeed={3000}
        centerMode={true}
        dynamicHeight={true}
        showThumbs={false}
      >
        {images.map((image, i) => (
          <div key={i} className="carousel-item my-auto min-h-full flex">
            <img src={image} alt="" className="place-self-center h-100" />
          </div>
        ))}
      </Carousel>
    );
  }

  const projectCards = projects.map(
    ({ name, repo_link, deploy_link, images, gist }, i) => {
      return (
        <article className="relative m-2 col-span-2" key={i}>
          <label
            className="
                  absolute
                  z-10
                  bottom-8
                  right-2
                  py-2
                  px-4
                  bg-mid
                  text-light
                  rounded-tl-md rounded-bl-md
                "
          >
            <h3 className="text-lg">{name}</h3>
            <span className="flex text-sm justify-start whitespace-wrap">
              {gist}
            </span>
            <div className="flex text-sm w-full justify-around">
              <a
                className="bg-pop m-2 py-1 p-4 ring-2 rounded h-8"
                href={repo_link}
                target="_blank"
                rel="noreferrer"
                alt={name + " repo"}
              >
                repo
              </a>
              <a
                className="bg-pop m-2 py-1 p-4 ring-2 rounded h-8"
                href={deploy_link}
                target="_blank"
                rel="noreferrer"
                alt={name + " deploy"}
              >
                deploy
              </a>
            </div>
          </label>
          <div className="flex p-2 bg-mid rounded-xl">{carousel(images)}</div>
        </article>
      );
    }
  );

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
