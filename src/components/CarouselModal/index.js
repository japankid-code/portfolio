import styles from "./css/CarouselModal.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CarouselModal({
  images,
  carouselModal,
  setCarouselModal,
}) {
  return (
    <section
      className={styles.modalBg}
      onClick={(e) => {
        if (e.target.classList.contains(styles.modalBg))
          setCarouselModal(!carouselModal);
      }}
    >
      <div className={styles.modal}>
        <div className={styles.modalHeader}>About the project</div>
        <div className={styles.modalContent}>
          <Carousel
            dots={true}
            infiniteLoop={true}
            centerMode={true}
            dynamicHeight={true}
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
            <a href="https://github.com/japankid-code">Jake</a>
          </div>
        </nav>
      </div>
    </section>
  );
}
