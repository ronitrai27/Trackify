import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import ContextProvider from "./context/Context"; // Import ContextProvider
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </AppProvider>
  </BrowserRouter>
);
