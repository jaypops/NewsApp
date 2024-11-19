import { useState } from "react";
import styles from "./BackDoor.module.css";
import { FaDoorOpen } from "react-icons/fa";
import { FaDoorClosed } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function BackDoor() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  if (!isHovered) {
    navigate(-1);
  }
  return (
    <div className={styles.back}>
      {isHovered ? (
        <FaDoorOpen
          className={styles.open}
          onMouseLeave={() => setIsHovered(false)}
        />
      ) : (
        <FaDoorClosed
          className={styles.close}
          onMouseEnter={() => setIsHovered(true)}
        />
      )}
    </div>
  );
}

export default BackDoor;
