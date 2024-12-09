import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
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
      <div>
        filter shown with<input name="nameFilter"/>
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

      {persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
