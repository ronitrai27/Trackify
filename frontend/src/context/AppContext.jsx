import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const [user, setUser] = useState(null); // Store user data

  const toggleTheme = () => {
    setTheme(!theme);
  };

  // Fetch user data once when the app loads
  useEffect(() => {
    const fetchUser = async () => {
      const userEmail = localStorage.getItem("userEmail");
      if (!userEmail) return;

      try {
        const response = await axios.get(
          `http://localhost:5000/api/auth/user/email/${userEmail}`
        );
        setUser(response.data);
      } catch (error) {
        console.error(
          "Error fetching user:",
          error.response?.data?.message || error.message
        );
      }
    };

    fetchUser();
  }, []);

  const value = {
    theme,
    toggleTheme,
    user,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
