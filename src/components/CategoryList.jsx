import styles from "./CategoriyList.module.css";
import "swiper/css/navigation";
import "swiper/css";
import Reasult from "./Reasult";
import { SwiperSlide, Swiper } from "swiper/react";
import { useEffect } from "react";
import { useApicalls } from "../context/Apicalls";
import { Mousewheel, Keyboard } from "swiper/modules";
// import Button from "./Button";

function CategoryList() {
  const { news, fetchCategory } = useApicalls();

  const categories = [
    "sports",
    "crime",
    "food",
    "education",
    "entertainment",
    "business",
    "health",
    "politics",
  ];
  useEffect(() => {
    categories.forEach((category) => fetchCategory(category));
  }, [fetchCategory]);

  return (
    <div className={styles.main}>
      {categories.map((categoryName, index) => (
        <section key={index} id={categoryName}>
          <div className={styles.header}>
            <div>
              <h2>
                {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
              </h2>
              <h4>All the latest news collected in one place</h4>
            </div>
            {/* <Button type="back">
              {" "}
              <h3>More...</h3>
            </Button> */}
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            modules={[Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {news[categoryName]?.map((article) => (
              <SwiperSlide key={article.pubDate}>
                <Reasult key={article.article_id} article={article} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.line}></div>
        </section>
      ))}
    </div>
  );
}

export default CategoryList;
