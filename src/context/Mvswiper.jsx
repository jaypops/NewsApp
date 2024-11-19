import { createContext, useContext } from "react";
import { useState, useRef } from "react";
import PropTypes from "prop-types";

const Swiper = createContext();
const Swiperprovider = ({ children }) => {
  const [view, setview] = useState(true);
  const swiperRef = useRef(null);

  const handlePlayPause = () => {
    if (swiperRef.current) {
      if (view) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setview((eye) => !eye);
    }
  };
  return (
    <Swiper.Provider value={{ view, setview, handlePlayPause, swiperRef }}>
      {children}
    </Swiper.Provider>
  );
};
function useSwiper() {
  const context = useContext(Swiper);
  if (context === undefined)
    throw new Error("Swiper was use outside the provider");
  return context;
}
export { Swiperprovider, useSwiper };
Swiperprovider.propTypes = {
  children: PropTypes.node.isRequired,
};
