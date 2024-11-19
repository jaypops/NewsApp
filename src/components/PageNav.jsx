import { useSide } from "../context/Barhandler";
import Categories from "./Categories";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  const { sideBar } = useSide();
  return (
    <>
      <div className={styles.search}></div>
      <div className={sideBar ? `${styles.sidebar}` : `${styles.bar}`}>
        <div className={styles.logoContent}>
          <Logo />
        </div>
        <ul className={styles.navList}>
          <Categories />
        </ul>
      </div>
    </>
  );
}

export default PageNav;
