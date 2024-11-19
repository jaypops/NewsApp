import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import backupImage from "./news.jpg";
import "swiper/css";
import { useSwiper } from "../context/Mvswiper";
import styles from "./Slides.module.css";
import { timeSince } from "../Hooks/useTime";
import { useEffect } from "react";
import { useApicalls } from "../context/Apicalls";
import Imageview from "./Imageview";

function Slides() {
  const { news, fetchCategory } = useApicalls();
  const { swiperRef } = useSwiper();

  useEffect(() => {
    fetchCategory("top");
  }, [fetchCategory]);

  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      cssMode={true}
      modules={[Autoplay, Pagination, Navigation, Mousewheel, Keyboard]}
      className="mySwiper"
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {news.top.map((slide, index) => (
        <SwiperSlide
          key={index}
          style={{
            position: "relative",
            minHeight: "100vh",
            width: "100%",
            padding: "0 4rem",
            background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${
              slide.image_url ? slide.image_url : backupImage
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "all 0.5s ease",
          }}
        >
          <div className={styles.Text}>
            <Imageview />
            <h3>{slide.title}.</h3>
            <h2>{slide.country}.</h2>

            <h4>
              {slide.description}
              <a
                href={slide.source_url}
                className={styles.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </h4>
            <div className={styles.publish}>
              <span className={styles.date}>
                Publish date: {timeSince(slide.pubDate)}
              </span>
              <span className={styles.by}>Publish By: {slide.source_name}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slides;
