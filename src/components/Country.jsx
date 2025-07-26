import { Link } from "react-router-dom";
import React from "react";
import List from "./utils/List";

const Country = ({ country, id }) => {
  return (
    <Link to={`/countries/${id}`} style={{ textDecoration: "none" }}>
      <div className="country">
        <div className="section-1">
          <img src={country.flags.svg} alt={country.flags.alt} />
        </div>
        <div className="section-2">
          <h3>{country.name.common}</h3>
          <List
            label={"Population"}
            value={country.population.toLocaleString()}
          />
          <List label={"Region"} value={country.region} />
          <List label={"Capital"} value={country.capital} />
        </div>
      </div>
    </Link>
  );
};

export default React.memo(Country);
