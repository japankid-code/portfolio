import React, { useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import CarouselModal from "../components/CarouselModal";

import { projects } from "../utils/projectData";

export function Projects() {
  const [carouselModal, setCarouselModal] = useState({
    open: false,
    projectIndex: 0,
  });

  const handleModalOpener = async (index) => {
    await setCarouselModal({ projectIndex: index, open: !carouselModal.open });
  };

  const carouselModalCard = (project) => {
    return (
      <CarouselModal
        project={project}
        carouselModal={carouselModal}
        setCarouselModal={setCarouselModal}
      ></CarouselModal>
    );
  };

  const projectCards = projects.map((project, i) => {
    const { name, repo_link, deploy_link, images, gist } = project;
    return (
      <article className="relative m-2 col-span-2 xl:col-span-1" key={i}>
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
        <div className="flex p-2 bg-mid rounded-xl">
          {carouselModal.open && carouselModal.projectIndex === i
            ? carouselModalCard(project)
            : console.log("carousel closed")}
          <Carousel
            dots={true}
            infiniteLoop={true}
            centerMode={true}
            showThumbs={false}
            onClickItem={() => {
              return handleModalOpener(i);
            }}
          >
            {images.map((image, i) => (
              <div
                key={i}
                className="carousel-item my-auto min-h-full flex cursor-pointer"
              >
                <img
                  src={image}
                  alt=""
                  className="place-self-center h-100 rounded"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </article>
    );
  });

  return (
    <section
      id="projects"
      className="grid grid-cols-12 m-2 mt-8 self-center flex-grow min-w-full"
    >
      <h2 className="col-start-1 xl:col-start-2 col-span-3 xl:col-span-2 flex justify-end text-2xl">
        Projects
        <div className="divider m-1 h-8 w-1 rounded bg-dark ml-2"></div>
      </h2>
      <div className="col-span-7 xl:col-span-7 2xl:col-span-6 flex flex-col m-2">
        <div className="col-span-8 xl:col-span-5 grid grid-cols-2 ml-2">
          {projectCards}
        </div>
      </div>
    </section>
  );
}

export default Projects;
