import { useEffect } from "react";
import { useApicalls } from "../context/Apicalls";
import styles from "./Search.module.css";
import { CiSearch } from "react-icons/ci";
import { useNavigate, useSearchParams } from "react-router-dom";
import SpinnerFullPage from "./SpinnerFullPage";

function Search() {
  const { Input, setInput, fetchSearch, isLoading, apiError } = useApicalls();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const query = searchParams.get("query") || "";
    setInput(query);
  }, [setInput, searchParams]);
  const navigate = useNavigate();
  function handleSearch(e) {
    e.preventDefault();
    if (Input) {
      setSearchParams({ query: Input });
      fetchSearch(Input);
    }
    if (Input === "") return;
  }
  function handleClick() {
    navigate("/search");
  }
  if (isLoading) return <SpinnerFullPage />;

  return (
    <form className={styles.search} onSubmit={handleSearch}>
      {!apiError === "" && (
        <div className={styles.sea}>
          <span className={styles.icon}>
            <CiSearch />
          </span>
          <span className={styles.text}>
            <input
              type="search"
              placeholder="Click here to search..."
              onClick={handleClick}
              value={Input}
              onChange={(e) => setInput(e.target.value)}
            />
          </span>
        </div>
      )}
    </form>
  );
}

export default Search;
