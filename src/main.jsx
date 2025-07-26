import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeContextProvider } from "./theme-context/ThemeContext";
import { CountryContextProvider } from "./country-context/CountryContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <CountryContextProvider>
        <App />
      </CountryContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
