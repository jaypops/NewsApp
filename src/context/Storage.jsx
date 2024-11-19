import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Storage = createContext({
  savedNews: [],
  updateSavedNews: () => {},
  removeSavedNews: () => {},
  clearallSavedNews: () => {},
});
const StorageProvider = ({ children }) => {
  const [savedNews, setSavedNews] = useState([]);
  useEffect(() => {
    const savedNewsArray = JSON.parse(localStorage.getItem("savedNews")) || [];
    setSavedNews(savedNewsArray);
  }, []);

  useEffect(() => {
    localStorage.setItem("savedNews", JSON.stringify(savedNews));
  }, [savedNews]);
  const updateSavedNews = (newArticle) => {
    setSavedNews((prevSavedNews) => [...prevSavedNews, newArticle]);
    localStorage.setItem(newArticle.article_id, JSON.stringify(newArticle));
  };

  const removeSavedNews = (article) => {
    setSavedNews((prevSavedNews) =>
      prevSavedNews.filter((item) => item.article_id !== article.article_id)
    );
    localStorage.removeItem(article.article_id);
  };
  const clearallSavedNews = () => {
    setSavedNews([]);
    localStorage.clear();
  };
  return (
    <Storage.Provider
      value={{
        removeSavedNews,
        updateSavedNews,
        savedNews,
        setSavedNews,
        clearallSavedNews,
      }}
    >
      {children}
    </Storage.Provider>
  );
};
function useStorage() {
  const context = useContext(Storage);
  if (context === undefined)
    throw new Error("Storage was use outside the provider");
  return context;
}
export { StorageProvider, useStorage };
StorageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
