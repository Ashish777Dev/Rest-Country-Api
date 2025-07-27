import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountrySection from "./components/CountrySection";
import CountryDetails from "./components/country-details/CountryDetails";
import Pagination from "./components/pagination/Pagination";
import SearchFilter from "./components/search-filter/SearchFilter";
import { useContext } from "react";
import { CountryContext } from "./country-context/CountryContext";
import Footer from "./Footer";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        {/* Outlet render the content the matched child route */}
        <Outlet />
        <Footer />
      </>
    );
  };

  const HomeContent = () => {
    const { slicedData } = useContext(CountryContext);

    return (
      <>
        <SearchFilter />
        <CountrySection />
        {slicedData.length !== 0 ? <Pagination /> : null}
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomeContent />,
        },
        {
          // country details
          path: "/countries/:id",
          element: <CountryDetails />,
        },
        {
          // page not found
          path: "*",
          element: <p>Page not found 404!</p>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
