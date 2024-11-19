import Button from "../components/Button";
import styles from "./NavR.module.css";
import Sort from "../components/Sort";
import { useStorage } from "../context/Storage";
function NavR() {
  const { clearallSavedNews } = useStorage();
  function handleDeleteAll() {
    clearallSavedNews();
  }
  return (
    <div className={styles.nav}>
      <div>
        <Sort />
      </div>
      <div className={styles.btn}>
        <Button type="primary" onClick={handleDeleteAll}>
          Clear All
        </Button>
      </div>
    </div>
  );
}

export default NavR;
