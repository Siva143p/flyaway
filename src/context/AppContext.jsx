import { createContext, useContext, useRef, useState } from "react";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
  const topComponentRef = useRef(null);
  const [airport, setAirport] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollToTop = () => {
    topComponentRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const contextValue = {
    scrollToTop,
    setAirport,
    setLoading,
    loading,
    airport,
    topComponentRef,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
