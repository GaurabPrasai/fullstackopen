import { useState, useEffect } from "react";
import axios from "axios";
import Name from "./components/Name";
import AddNewPerson from "./components/AddNewPerson";
import FilterPerson from "./components/FilterPersons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handlePersonChange = (e) => {
    setNewPerson({
      ...newPerson,
      [e.target.name]: e.target.value,
    });
  };

  const addPersons = (e) => {
    e.preventDefault();

    const isDuplicate = persons.some(
      (person) => person.name.toLowerCase() === newPerson.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }

    const personToAdd = {
      ...newPerson,
      id: persons.length > 0 ? persons[persons.length - 1].id + 1 : 1,
    };

    setPersons(persons.concat(personToAdd));
    setNewPerson({ name: "", number: "" });
  };

  const filteredPerson = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <FilterPerson value={filter} func={handleFilterChange} />

      <form onSubmit={addPersons}>
        <AddNewPerson
          text={"name"}
          data={newPerson.name}
          func={handlePersonChange}
        />
        <AddNewPerson
          text={"number"}
          data={newPerson.number}
          func={handlePersonChange}
        />

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPerson.map((person) => (
        <div key={person.id}>
          <Name name={person.name} number={person.number} />
        </div>
      ))}
    </div>
  );
};

export default App;
