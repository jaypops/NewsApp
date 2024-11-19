import styles from "./Home.module.css";
import Slides from "../components/Slides";
import Categoriess from "../components/CategoryList";
import { useApicalls } from "../context/Apicalls";
import Spinner from "../components/Spinner";
import Message from "../components/Message";

function Home() {
  const { isLoading, apiError } = useApicalls();
  if (isLoading) return <Spinner />;
  if (apiError) return <Message message={apiError} />;

  return (
    <main className={styles.LandingPage}>
      <Slides />
      <div className={styles.main}>
        <Categoriess />
      </div>
    </main>
  );
}

export default Home;
