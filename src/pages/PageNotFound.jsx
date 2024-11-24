import { useNavigate } from "react-router-dom";
import styles from "./PageNotFound.module.css";
import Button from "../components/Button";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <h1>Something went wrong 😢</h1>
      <Button type="real" onClick={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
}

export default PageNotFound;
