import backupImage from "./news.jpg";
import styles from "./Reasult.module.css";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { timeSince } from "../Hooks/useTime";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useStorage } from "../context/Storage";

function Result({ article }) {
  const { removeSavedNews, updateSavedNews, savedNews } = useStorage();
  const isSaved = savedNews.some(
    (item) => item.article_id === article.article_id
  );
  const handleSave = () => {
    if (isSaved) {
      removeSavedNews(article);
    } else {
      updateSavedNews(article);
    }
  };
  return (
    <div className={styles.box}>
      {/* <h5>{article.country}.</h5> */}
      <LazyLoadImage
        src={article.image_url || backupImage}
        className={styles.img}
        alt={article.title}
        effect="blur"
        placeholderSrc={backupImage}
      />
      <div className={styles.head}>
        <h2>{article.title}</h2>
        <span className={styles.arrow}>
          <FaArrowRightLong />
        </span>
      </div>
      <h3>{article.description}</h3>
      <a
        href={article.link}
        className={styles.url}
        target="_blank"
        rel="noreferrer"
      >
        Read more
      </a>
      <div className={styles.foot}>
        <div className={styles.leftfoot}>
          <span>{timeSince(article.pubDate)}</span>
        </div>
        <div className={styles.rightfoot} onClick={handleSave}>
          {isSaved ? (
            <FaHeart className={styles.her} />
          ) : (
            <CiHeart className={styles.her} />
          )}
        </div>
      </div>
    </div>
  );
}

Result.propTypes = {
  article: PropTypes.shape({
    article_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    description: PropTypes.string,
    image_url: PropTypes.string,
    link: PropTypes.string.isRequired,
    pubDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default Result;
