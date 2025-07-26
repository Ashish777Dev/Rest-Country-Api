import React from "react";
import DropDown from "./DropDown";
import SearchBox from "./SearchBox";
import "./searchfilter.css";

const SearchFilter = () => {
  return (
    <div className="search-filter">
      <SearchBox />
      <DropDown />
    </div>
  );
};

export default SearchFilter;
