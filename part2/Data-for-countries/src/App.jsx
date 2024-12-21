import { useEffect, useState } from 'react'
import FilterCountries from './components/FilterCountries'
import CountriesData from './services/CountriesData';

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("");

  useEffect(() => {
    CountriesData.getAll(filter).then((countries) => {
      setCountries(countries);
    })

  },[filter])

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <FilterCountries value={filter} func={handleFilterChange}/>
      <pre>
        {JSON.stringify(countries, null, 2)}
      </pre>
    </>
  )
}

export default App
