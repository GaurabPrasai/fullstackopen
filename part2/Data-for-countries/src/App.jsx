import { useEffect, useState } from "react";
import FilterCountries from "./components/FilterCountries";
import CountriesData from "./services/CountriesData";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    CountriesData.getAll()
      .then(countries => setCountries(countries));
  }, []); // Only fetch once when component mounts

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

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
            {Object.values(country.languages).map(language => 
              <li key={language}>{language}</li>
            )}
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
      <div key={country.name.common}>{country.name.common}</div>
    ));
  };

  return (
    <>
      find countries <input value={filter} onChange={handleFilterChange} />
      {displayCountries()}
    </>
  );
}

export default App;
