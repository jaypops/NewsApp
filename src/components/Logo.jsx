import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import { LuMenu } from "react-icons/lu";
import { useSide } from "../context/Barhandler";

function Logo() {
  const { sideBar, Handlersidebar } = useSide();
  return (
    <>
      <div className={sideBar ? `${styles.logo}` : `${styles.hidden}`}>
        <Link to="/" className={styles.text}>
          <span className={styles.icon1}>
            {" "}
            <box-icon type="solid" color="#ffffff" name="news"></box-icon>
          </span>
          <div className={styles.logoName}>NewsApp</div>
        </Link>
      </div>
      <div
        className={sideBar ? `${styles.btn}` : `${styles.barbtn}`}
        onClick={Handlersidebar}
      >
        <LuMenu />
      </div>
    </>
  );
}

export default Logo;
