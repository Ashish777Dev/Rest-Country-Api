import { useContext, useEffect } from "react";
import { ThemeContext } from "../theme-context/ThemeContext";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

const StyleInputCheckBox = {
  webKitAppearance: "none",
  appearance: "none",
  width: 0,
  height: 0,
  opacity: 0,
  visiblity: "hidden",
  position: "absolute",
  pointerEvents: "none",
};

const body = document.body;
const appTheme = body.querySelector(".app-theme");

const ThemeCheckBox = () => {
  const { checked, isChecked } = useContext(ThemeContext);

  useEffect(() => {
    if (body) {
      if (checked) {
        appTheme.classList.add("dark-mode");
      } else {
        appTheme.classList.remove("dark-mode");
      }
    }
  }, [checked]);

  return (
    <label className="theme-check-box" htmlFor="checkbox">
      <input
        type="checkbox"
        checked={checked}
        style={StyleInputCheckBox}
        id="checkbox"
        onChange={isChecked}
        aria-label="light or dark theme"
      />
      {checked ? (
        <>
          <IoMoonOutline />
          Light Mode
        </>
      ) : (
        <>
          <IoMoon />
          Dark Mode
        </>
      )}
    </label>
  );
};

export default ThemeCheckBox;
