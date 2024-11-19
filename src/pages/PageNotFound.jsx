import { useNavigate } from "react-router-dom";
import styles from "./Error.module.css";
import Button from "../components/Button";

function Error() {
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

export default Error;
