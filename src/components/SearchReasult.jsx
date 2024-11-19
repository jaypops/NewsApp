import { useApicalls } from "../context/Apicalls";
import Reasult from "./Reasult";
import styles from "./SearchReasult.module.css";
import NavR from "../components/NavR";
function SearchReasult() {
  const { Searchdata, Input } = useApicalls();
  const condition = Searchdata.length > 0;
  return (
    <div className={styles.main}>
      {condition && <NavR />}
      <div className={styles.boxMain}>
        {Searchdata && condition && Input ? (
          <>
            {Searchdata.map((article) => (
              <Reasult key={article.source_priority} article={article} />
            ))}
          </>
        ) : (
          <p>Make a Search..</p>
        )}
      </div>
    </div>
  );
}

export default SearchReasult;
