import { RiArrowDropDownLine } from "react-icons/ri";
import React, { useContext, useRef } from "react";
import { CountryContext } from "../../country-context/CountryContext";

//DROP DOWN FILTER
const DropDown = () => {
  const { option, setOption, setSearchQuery } = useContext(CountryContext);
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const listRef = useRef(null);

  const toggleOption = () => {
    const optionContainer = listRef.current;
    optionContainer.classList.toggle("show-option");
  };

  return (
    <div className="drop-down">
      <button className="filter-btn" onClick={toggleOption}>
        {option} <RiArrowDropDownLine className="drop-icon" />
      </button>
      <ul className="option" ref={listRef} role="menu">
        {regions.map((region) => (
          <List
            region={region}
            key={region}
            setOption={setOption}
            toggleOption={toggleOption}
            setSearchQuery={setSearchQuery}
          />
        ))}
      </ul>
    </div>
  );
};

export default DropDown;

const List = ({ region, setOption, toggleOption, setSearchQuery }) => {
  const handleOption = () => {
    setOption(region);
    //if drop down filter is change then setSearchQuery to ""
    setSearchQuery("");
    toggleOption();
  };
  return (
    <li className="list" role="menuitem" onClick={handleOption}>
      {region}
    </li>
  );
};
