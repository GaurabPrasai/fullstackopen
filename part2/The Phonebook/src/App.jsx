import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newPerson, setNewPerson] = useState({name: "", number: ""});
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

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

    const personToAdd = {
      ...newPerson,
      id: persons.length > 0 ? persons[persons.length - 1].id + 1 : 1,
    };

    setPersons(persons.concat(personToAdd));
    setNewPerson({ name: "", number: "" });
  };

  const filteredPerson = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with<input value={filter} onChange={handleFilterChange}/>
      </div>
      <form onSubmit={addPersons}>
        <div>
          name: <input name="name" value={newPerson.name} onChange={handlePersonChange} />
          <div>
            number: <input name="number" value={newPerson.number} onChange={handlePersonChange} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPerson.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
