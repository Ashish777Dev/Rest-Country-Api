import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import "./searchfilter.css";
import { CountryContext } from "../../country-context/CountryContext";

//SEARCH FILTER
const SearchBox = () => {
  const { searchQuery, setSearchQuery, setOption } = useContext(CountryContext);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);

    // if user searches then make dropdown to default "Filter by region"
    if (e.target.value) {
      setOption("Filter by region");
    }
  };

  return (
    <div className="search-box">
      <span className="search-icon">
        <IoSearch />
      </span>
      <input
        type="text"
        value={searchQuery}
        placeholder="Search for a country..."
        onChange={handleChange}
        aria-label="Search for a country"
      />
    </div>
  );
};

export default SearchBox;
