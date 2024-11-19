import styles from "./Saved.module.css";
import Reasult from "../components/Reasult";
import { useStorage } from "../context/Storage";
import NavR from "../components/NavR";

function Saved() {
  const { savedNews } = useStorage();
  const condition = savedNews.length === 0;
  return (
    <div className={styles.main}>
      {!condition && <NavR />}
      <div className={styles.boxMain}>
        {condition ? (
          <p className={styles.option}>Add Saved</p>
        ) : (
          savedNews.map((article) => (
            <Reasult key={article.article_id} article={article} />
          ))
        )}
      </div>
    </div>
  );
}

export default Saved;
