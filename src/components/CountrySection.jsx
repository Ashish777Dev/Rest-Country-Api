import { CountryContext } from "../country-context/CountryContext";
import { useContext } from "react";
import Country from "./Country";
import Loader from "./loader/Loader";
const CountrySection = () => {
  const { slicedData } = useContext(CountryContext);

  return (
    <div className="country-section">
      {slicedData.length === 0 ? (
        <Loader />
      ) : (
        slicedData.map((country) => {
          const commonName = JSON.stringify(country.name.common);
          return (
            //NOTE set id=commonName
            <Country country={country} key={commonName} id={commonName} />
          );
        })
      )}
    </div>
  );
};

export default CountrySection;
