import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CountrySection from "./components/CountrySection";
import CountryDetails from "./components/country-details/CountryDetails";
import Pagination from "./components/pagination/Pagination";
import SearchFilter from "./components/search-filter/SearchFilter";
import { useContext } from "react";
import { CountryContext } from "./country-context/CountryContext";

function App() {
  const { slicedData } = useContext(CountryContext);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/countries/:id" element={<CountryDetails />} />
          <Route
            path="/"
            element={
              <>
                <SearchFilter />
                <CountrySection />
                {slicedData.length !== 0 ? <Pagination /> : null}
              </>
            }
          />
          <Route path="*" element={<h1>Page not Found! 404</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
