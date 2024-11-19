import { createContext, useCallback, useContext, useState } from "react";
import { rateLimitedFetch } from "../Hooks/useRatelimit";
import PropTypes from "prop-types";

const Apicalls = createContext();

const Apiprovider = ({ children }) => {
  const API_KEY = "pub_523349e609b7276d3a356e4be35dd581c10ef";
  const BASE_API = "https://newsdata.io/api/1/latest";
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [Input, setInput] = useState("");
  const [Searchdata, setSearchdata] = useState([]);
  const [news, setNews] = useState({
    top: [],
    sports: [],
    health: [],
    entertainment: [],
    business: [],
    crime: [],
    education: [],
    food: [],
    politics: [],
  });

  const handleApiRequest = async (url, setState) => {
    try {
      setIsLoading(true);
      setApiError("");
      const response = await rateLimitedFetch(url);
      // if (response.status === 429) {
      //   throw new Error("API limit reached. Please try again in an hour.");
      // }
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setState(data.results);
    } catch (error) {
      if (!navigator.onLine) {
        setApiError("You're offline. Check your internet connection.");
      } else {
        setApiError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategory = useCallback(
    async (category) => {
      if (news[category] && news[category].length > 0) return;
      const url = `${BASE_API}?apikey=${API_KEY}&category=${category}&language=en`;
      handleApiRequest(url, (results) => {
        setNews((prevNews) => ({
          ...prevNews,
          [category]: results,
        }));
      });
    },
    [BASE_API, API_KEY, news]
  );

  const fetchSearch = useCallback(
    async (search) => {
      const url = `${BASE_API}?apikey=${API_KEY}&q=${search}&language=en`;
      handleApiRequest(url, setSearchdata);
    },
    [BASE_API, API_KEY]
  );

  return (
    <Apicalls.Provider
      value={{
        news,
        isLoading,
        apiError,
        fetchCategory,
        fetchSearch,
        Searchdata,
        setInput,
        Input,
      }}
    >
      {children}
    </Apicalls.Provider>
  );
};

function useApicalls() {
  const context = useContext(Apicalls);
  if (context === undefined)
    throw new Error("useApicalls must be used within a Apiprovider");
  return context;
}

export { Apiprovider, useApicalls };

Apiprovider.propTypes = {
  children: PropTypes.node.isRequired,
};
