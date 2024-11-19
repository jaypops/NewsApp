import styles from "./Spinner.module.css";
import { HashLoader } from "react-spinners";
function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}>
        <HashLoader color="#fff" size={100} />
      </div>
    </div>
  );
}

export default Spinner;
