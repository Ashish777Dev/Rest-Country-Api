import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountryContext } from "../../country-context/CountryContext";
import Loader from "../loader/Loader";
import TopSection from "./TopSection";
import LeftSection from "./ImageSection";
import ShowDetails from "./ShowDetails";
import "./countrydetails.css";

const CountryDetails = () => {
  const { countries } = useContext(CountryContext);
  const { id } = useParams();
  const findCountry = countries.find((country) => {
    let countryID = JSON.stringify(country.name.common);
    return countryID === id;
  });

  const [countryDetails, setCountryDetails] = useState(null);
  useEffect(() => {
    //if country find the specified ID then setCountryDetails to findCountry else set to []
    // findCountry ? setCountryDetails(findCountry) : setCountryDetails([]);
    if (findCountry) {
      setCountryDetails(findCountry);
    } else {
      setCountryDetails(null);
    }
  }, [findCountry, id]);

  if (!countryDetails) return <Loader />;

  const nativeLanguage = Object.entries(countryDetails.name.nativeName).map(
    ([lang, common]) => {
      return {
        language: lang,
        commonLanguage: common.official || countryDetails.name.common || "N/A",
      };
    }
  );
  const countryCurrencies = Object.entries(countryDetails.currencies).map(
    ([curr]) => {
      return {
        currencies: curr || "N/A",
      };
    }
  );

  const countryLanguages = Object.values(countryDetails.languages);

  const native = nativeLanguage[0].language.toUpperCase();
  const currencies = countryCurrencies[0].currencies;
  const languages = countryLanguages.toLocaleString();
  console.log(languages)
  
  return (
    <div className="country-details">
      <TopSection />
      <LeftSection countryDetails={countryDetails} />
      <ShowDetails
        nativeLanguage={native}
        countryDetails={countryDetails}
        countryCurrencies={currencies}
        countries={countries}
        languages={languages}
      />
    </div>
  );
};

export default CountryDetails;
