import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const Sidebar = createContext();
const Sideprovider = ({ children }) => {
  const [sideBar, setsideBar] = useState(false);
  const [display, setdisplay] = useState(false);
  function Handlersidebar() {
    setsideBar((slide) => !slide);
  }
  function Handlebar() {
    setdisplay((dis) => !dis);
  }

  return (
    <Sidebar.Provider value={{ sideBar, Handlersidebar, Handlebar, display }}>
      {children}
    </Sidebar.Provider>
  );
};
function useSide() {
  const context = useContext(Sidebar);
  if (context === undefined)
    throw new Error("Sidebar was use outside the provider");
  return context;
}
export { Sideprovider, useSide };
Sideprovider.propTypes = {
  children: PropTypes.node.isRequired,
};
