import { createContext, useContext, useState, useCallback } from 'react';
import Loader from '../components/Loader.js';

const LoaderContext = createContext();

export function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Loading...");

  // Show loader
  const showLoader = useCallback((msg = "Loading...") => {
    setMessage(msg);
    setLoading(true);
  }, []);

  // Hide loader
  const hideLoader = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      {children}

      {/* Global Loader */}
      <Loader open={loading} message={message} />
    </LoaderContext.Provider>
  );
}

// Custom hook
export function useLoader() {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within LoaderProvider");
  }
  return context;
}