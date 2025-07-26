import React from "react";
import { Link } from "react-router-dom";

const BorderCountry = ({ countryDetails, countries }) => {
  return (
    <div className="border-country">
      <strong>Border Countries:</strong>
      <div className="show-borders">
        {countryDetails.borders ? (
          countryDetails.borders.map((value, index) => {
            const findBorderCountry = countries.find(
              (country) => country.cca3 === value
            );

            if (!findBorderCountry) return;

            return (
              <Link
                to={`/countries/${JSON.stringify(
                  findBorderCountry.name.common
                )}`}
                key={index}
                className="border"
              >
                {findBorderCountry.name.common}
              </Link>
            );
          })
        ) : (
          <p className="no-border">N/A</p>
        )}
      </div>
    </div>
  );
};

export default BorderCountry;
