/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

export const ContextCollapsed = createContext();

export const ContextProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <ContextCollapsed.Provider value={{ isCollapsed, setIsCollapsed }}>
      {children}
    </ContextCollapsed.Provider>
  );
};
