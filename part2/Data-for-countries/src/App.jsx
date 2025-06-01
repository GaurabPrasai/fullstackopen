import { useEffect, useState } from "react";
import FilterCountries from "./components/FilterCountries";
import CountriesData from "./services/CountriesData";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    CountriesData.getAll().then((countries) => setCountries(countries));
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setSelectedCountry(null);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  const showCountriesDetails = (country) => {
    setSelectedCountry(country);
  };

  const displayCountries = () => {
    if (!filter) {
      return null;
    }

    if (filteredCountries.length > 10) {
      return <div>Too many matches, specify another filter</div>;
    }

    
    if (filteredCountries.length === 1) {
      const country = filteredCountries[0];
      return (
        <div>
          <h2>{country.name.common}</h2>
          <p>capital {country.capital}</p>
          <p>area {country.area}</p>
          <h3>languages:</h3>
          <ul>
            {Object.values(country.languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img
            src={country.flags.png}
            alt={`flag of ${country.name.common}`}
            width="150"
          />
        </div>
      );
    }

    if (selectedCountry) {
      const country = selectedCountry;
      return (
        <div>
          <h2>{country.name.common}</h2>
          <p>capital {country.capital}</p>
          <p>area {country.area}</p>
          <h3>languages:</h3>
          <ul>
            {Object.values(country.languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img
            src={country.flags.png}
            alt={`flag of ${country.name.common}`}
            width="150"
          />
        </div>
      );
    }

    return filteredCountries.map((country) => (
      <div key={country.name.common}>
        {country.name.common}{" "}
        <button onClick={() => showCountriesDetails(country)}>Show</button>
      </div>
    ));
  };

  return (
    <>
      <FilterCountries value={filter} func={handleFilterChange} />
      {displayCountries()}
    </>
  );
}

export default App;
