import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [checked, setChecked] = useState(false);
  const isChecked = () => setChecked(!checked);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", checked);

    return () => {
      document.body.classList.remove("dark-mode");
    };
  }, [checked]);

  return (
    <ThemeContext.Provider value={{ checked, setChecked, isChecked }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
