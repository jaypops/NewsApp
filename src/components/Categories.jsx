import { NavLink } from "react-router-dom";
import styles from "./Categories.module.css";
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import { FaBusinessTime } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiCrimeSceneTape } from "react-icons/gi";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GiEnergyShield } from "react-icons/gi";
import { useSide } from "../context/Barhandler";

function Categories() {
  const { sideBar } = useSide();
  const category = [
    {
      name: "sports",
      icon: <IoIosFootball />,
    },
    {
      name: "crime",
      icon: <GiCrimeSceneTape />,
    },
    {
      name: "food",
      icon: <IoFastFoodOutline />,
    },
    {
      name: "education",
      icon: <MdOutlineCastForEducation />,
    },
    {
      name: "entertainment",
      icon: <FaDisplay />,
    },
    {
      name: "business",
      icon: <FaBusinessTime />,
    },
    {
      name: "health",
      icon: <MdHealthAndSafety />,
    },
    {
      name: "politics",
      icon: <GiEnergyShield />,
    },
  ];

  return (
    <div className={styles.nav}>
      <li>
        <NavLink to="/" className={styles.ctaLink}>
          <span className={sideBar ? `${styles.icon}` : `${styles.iconbar}`}>
            <MdSpaceDashboard />
          </span>
          <span
            className={sideBar ? `${styles.LinksName}` : `${styles.hidden}`}
          >
            dashboard
          </span>
        </NavLink>
        <span
          className={sideBar ? `${styles.toolhidden}` : `${styles.tooltip}`}
        >
          dashboard
        </span>
      </li>
      {category.map((cati) => (
        <li key={cati.article_id}>
          <NavLink
            to={`#${cati.name}`}
            // ClassName={styles.active}
            className={styles.tog}
          >
            <span className={sideBar ? `${styles.icon}` : `${styles.iconbar}`}>
              {cati.icon}
            </span>
            <span
              className={sideBar ? `${styles.LinksName}` : `${styles.hidden}`}
            >
              {cati.name}
            </span>
          </NavLink>
          <span
            className={sideBar ? `${styles.toolhidden}` : `${styles.tooltip}`}
          >
            {cati.name}
          </span>
        </li>
      ))}
      <li>
        <NavLink to="/saved" className={styles.ctaLink}>
          <span className={sideBar ? `${styles.icon}` : `${styles.iconbar}`}>
            <FaHeart />
          </span>
          <span
            className={sideBar ? `${styles.LinksName}` : `${styles.hidden}`}
          >
            Favourite
          </span>
        </NavLink>
        <span
          className={sideBar ? `${styles.toolhidden}` : `${styles.tooltip}`}
        >
          Favourite
        </span>
      </li>
    </div>
  );
}

export default Categories;
