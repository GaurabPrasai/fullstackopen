import { useState } from "react";
import Name from "./components/Name";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "021-560673" }]);
  const [newPerson, setNewPerson] = useState({name: "", number: ""});

  const handlePersonChange = (e) => {
    setNewPerson({
      ...newPerson,
      [e.target.name]: e.target.value
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

    setPersons(persons.concat(newPerson));
    setNewPerson({ name: "", number: "" });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersons}>
        <div>
          name: <input name="name" value={newPerson.name} onChange={handlePersonChange} />
          number: <input name="number" value={newPerson.number} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
