import { useState } from 'react'
import FilterCountries from './components/FilterCountries'

function App() {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <FilterCountries value={filter} func={handleFilterChange}/>
    </>
  )
}

export default App
