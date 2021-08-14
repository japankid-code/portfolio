import styles from "./css/CarouselModal.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CarouselModal({
  project,
  carouselModal,
  setCarouselModal,
}) {
  const { name, repo_link, deploy_link, images, gist } = project;

  return (
    <section
      className={styles.modalBg}
      onClick={(e) => {
        if (e.target.classList.contains(styles.modalBg))
          setCarouselModal({ open: !carouselModal.open });
      }}
    >
      <div className={styles.modal}>
        <div className={styles.modalHeader}>project: {name}</div>
        <div className={styles.modalContent}>
          <Carousel
            dots={true}
            infiniteLoop={true}
            centerMode={true}
            showThumbs={false}
          >
            {images.map((image, i) => (
              <div key={i} className="carousel-item my-auto min-h-full flex">
                <img
                  src={image}
                  alt=""
                  className="place-self-center h-100 cursor-pointer rounded"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <a
              className="bg-pop m-2 py-1 p-4 ring-2 rounded h-8"
              href={repo_link}
              target="_blank"
              rel="noreferrer"
              alt={name + " repo"}
            >
              {name} repo
            </a>
            <a
              className="bg-pop m-2 py-1 p-4 ring-2 rounded h-8"
              href={deploy_link}
              target="_blank"
              rel="noreferrer"
              alt={name + " deploy"}
            >
              {name} deploy
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
}
