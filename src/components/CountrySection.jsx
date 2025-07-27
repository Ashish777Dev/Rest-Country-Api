import { CountryContext } from "../country-context/CountryContext";
import { useContext } from "react";
import Country from "./Country";
import Loader from "./loader/Loader";
import { useNavigation } from "react-router-dom";
const CountrySection = () => {
  const { slicedData } = useContext(CountryContext);

  const navigation = useNavigation();

  const isNavigating = navigation.state === "loading";

  const showLoader = slicedData.length === 0 || isNavigating;

  return (
    <div className="country-section">
      {showLoader ? (
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
