import React from "react";
import BorderCountry from "./BorderCountry";
import List from "../utils/List";

const ShowDetails = ({
  nativeLanguage,
  countryDetails,
  countryCurrencies,
  countries,
  languages,
}) => {
  const { population, region, subregion, capital, tld, name } = countryDetails;
  return (
    <div className="show-details">
      <h2 className="country-detail-name">{name.common}</h2>
      <div className="left-section">
        <ul>
          <List label={"Native Name"} value={nativeLanguage} />
          <List label={"Population"} value={population.toLocaleString()} />
          <List label={"Region"} value={region} />
          <List label={"Sub region"} value={subregion} />
          <List label={"Capital"} value={capital[0]} />
        </ul>
      </div>
      <div className="right-section">
        <ul>
          <List label={"Top level domain"} value={tld} />
          <List label={"Currencies"} value={countryCurrencies} />
          <List label={"Languages"} value={languages} />
        </ul>
      </div>
      {/* Border Section */}
      <BorderCountry countryDetails={countryDetails} countries={countries} />
    </div>
  );
};

export default ShowDetails;
