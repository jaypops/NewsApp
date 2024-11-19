import { CiPause1 } from "react-icons/ci";
import styles from "./Imageview.module.css";
import { CiPlay1 } from "react-icons/ci";
import { useSwiper } from "../context/Mvswiper";
function Imageview() {
  const { view, handlePlayPause } = useSwiper();
  return (
    <div className={styles.eye}>
      {view ? (
        <CiPause1 onClick={handlePlayPause} />
      ) : (
        <CiPlay1 onClick={handlePlayPause} />
      )}
    </div>
  );
}

export default Imageview;
