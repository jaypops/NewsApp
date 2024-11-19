import styles from "./Searchdetails.module.css";
import { ImCancelCircle } from "react-icons/im";
import backupImages from "./news.jpg";
import { useSide } from "../context/Barhandler";

function Searchdetails() {
  const { display, Handlebar } = useSide();
  return (
    <>
      {display && (
        <div className={styles.cover}>
          <h1>Purepeople</h1>
          <h3>
            <span className={styles.diff}>Written By :</span> Bertrand Bielle
          </h3>
          <div className={styles.icon}>
            <ImCancelCircle onClick={Handlebar} />
          </div>
          <div className={styles.timecati}>
            <span className={styles.time}>15 Sep 2024 12:02:00 PM</span>
            <span className={styles.cati}>Category : Entertainment</span>
          </div>
          <div>
            <div className={styles.img}>
              <img src={backupImages} alt="" />
            </div>
          </div>
          <h2>
            Santa est-elle toujours en couple ? Ses rares déclarations sur sa
            vie sentimentale
          </h2>
          <h4>
            Santa, qui est à retrouver aujourdhui dans lémission Un dimanche à
            la campagne a récemment brillé lors de la cérémonie... Santa, qui
            est à retrouver aujourdhui dans lémission Un dimanche à la campagne
            a récemment brillé lors de la cérémonie... Santa, qui est à
            retrouver aujourdhui dans lémission Un dimanche à la campagne a
            récemment brillé lors de la cérémonie...
          </h4>
          <a href="/">Complete Article</a>
        </div>
      )}
    </>
  );
}

export default Searchdetails;
