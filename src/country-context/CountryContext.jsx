import {
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import Loader from "../components/loader/Loader";

const CountryContext = createContext();

const debouncing = (fn, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    clearInterval(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

//API
const API_URL = "https://restcountries.com/v3.1/independent?status=true";

const CountryContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [slicedData, setSlicedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 12;
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [option, setOption] = useState("Filter by region");

  const debouncingGet = useCallback(
    debouncing((value) => setDebouncedValue(value), 500),
    []
  );

  useEffect(() => {
    const aboutController = new AbortController();
   
    const LoadCountries = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        if (!res.ok) throw new Error("Failed to fetch data", res.status);

        setCountries(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        console.log("loaded succesfully");
        setIsLoading(false);
      }
    };

    LoadCountries();

    return () => aboutController.abort();
  }, []);// --> Load country data once

  useEffect(() => {
    debouncingGet(searchQuery);
  }, [searchQuery, debouncingGet]);

  useEffect(() => {
    if (countries.length === 0) return;

    let filteredCountry = countries; // Start with all countries

    //DROP DOWN FILTER
    filteredCountry =
      option && option !== "Filter by region"
        ? filteredCountry.filter(
            (country) =>
              country.region.toLowerCase() === option.toLocaleLowerCase()
          )
        : countries;

    //USER INPUT FIELD FILTER
    {
      debouncedValue
        ? (filteredCountry = filteredCountry.filter((country) => {
            const commonName = country.name.common.toLowerCase();
            const officialName = country.name.official.toLowerCase();
            return (
              officialName.includes(debouncedValue.toLocaleLowerCase()) ||
              commonName.includes(debouncedValue.toLocaleLowerCase())
            );
          }))
        : countries;
    }
   

    console.log("FilteredCountry: " + filteredCountry.length);

    //                      1        x     12
    const lastPostIndex = currentPage * postPerPage;
    //    lastPostIndex=12  12       -     12 =   0
    const firstPostIndex = lastPostIndex - postPerPage;

    //    slicedCountries =  slicedData.slice(0 ,12)
    const slicedCountries = filteredCountry.slice(
      firstPostIndex,
      lastPostIndex
    );

    console.log("Sliced Country: " + slicedCountries.length);

    //if filteredCountry result in on page the reset to page 1 and check currentPage=1 is not 1 avoid overwrite
    if (filteredCountry.length <= postPerPage && currentPage !== 1) {
      setCurrentPage(1);
    }

    let newTotalPages = Math.ceil(filteredCountry.length / postPerPage);

    //If currentPage is out of bounds setCurrentPage=1
    if (currentPage > totalPages && totalPages > 0) {
      console.log("RESET");
      setCurrentPage(1);
    }

    //if newTotalPages is 0 set to 1 not 0 and if greater set to currentTotalPages
    setTotalPages(newTotalPages > 0 ? newTotalPages : 1);

    setSlicedData(slicedCountries);
  }, [countries, currentPage, debouncedValue, option, totalPages]);

  if (isLoading) {
    return <Loader />;
  } else if (error) {
    return (
      <div>
        <p>Something went wrong</p>
        <button onClick={() => window.location.reload()}>Try again</button>
      </div>
    );
  }

  return (
    <CountryContext.Provider
      value={{
        countries,
        setCountries,
        slicedData,
        totalPages,
        currentPage,
        setCurrentPage,
        searchQuery,
        setSearchQuery,
        option,
        setOption,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
export { CountryContext, CountryContextProvider };
