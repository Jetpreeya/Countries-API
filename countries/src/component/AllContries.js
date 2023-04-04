import { useState, useEffect } from "react";
import  Article from "./Items";
import './AllCountries.css'; 

export default function AllContries() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    document.title = `Showing All Countries`;
  }, []);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);

  async function searchCountry() {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearchCountry(e) {
    e.preventDefault();
    searchCountry();
  }

  return (
    <>
      {!countries ? (
        <h1 className="loading">
          Loading...
        </h1>
      ) : (
        <section className="container">
          <div className="item">
            <form
              onSubmit={handleSearchCountry}
              autoComplete="off"
              className="max-w-4xl md:flex-1"
            >
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for a country and press enter"
                required
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="searchClass"
              />
            </form>
          </div>

          <div className="result">
            {countries.map((country) => (
              < Article key={country.name.common} {...country} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}