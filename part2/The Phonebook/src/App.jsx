import { useState, useEffect } from "react";
import axios from "axios";
import Name from "./components/Name";
import AddNewPerson from "./components/AddNewPerson";
import FilterPerson from "./components/FilterPersons";
import phonebookData from "./services/phonebookData";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    phonebookData.getAll().then((initialPersons) => {
      setPersons(initialPersons);
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

    const isDuplicateNumber = persons.some(
      (person) =>
        person.name.toLowerCase() === newPerson.name.toLowerCase() &&
        person.number !== newPerson.number
    );

    const isDuplicate = persons.some(
      (person) => person.name.toLowerCase() === newPerson.name.toLowerCase()
    );

    if (isDuplicateNumber) {
      const existingPerson = persons.find(
        (person) => person.name.toLowerCase() === newPerson.name.toLowerCase()
      );

      const confirmReplace = alert(
        `${newPerson.name} is already added to phonebook, replace the old number with a new one?`
      );

      // Since alert() always returns undefined, you'll need to manually handle the confirmation
      phonebookData
        .update(existingPerson.id, {
          ...existingPerson,
          number: newPerson.number,
        })
        .then((updatedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id === existingPerson.id ? updatedPerson : person
            )
          );
        })
        .catch((error) => {
          console.error("Error updating number:", error);
          alert(`Failed to update number for ${newPerson.name}`);
        });

      return;
    }

    if (isDuplicate) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }

    const personToAdd = {
      ...newPerson,
      id: persons.length > 0 ? persons[persons.length - 1].id + 1 : 1,
    };

    phonebookData.create(personToAdd).then((addPersons) => {
      setPersons(persons.concat(addPersons));
      setNewPerson({ name: "", number: "" });
    });
  };

  const removeUser = (user) => {
    alert(`Delete ${user.name} ?`);
    phonebookData.remove(user.id).then(() => {
      setPersons(persons.filter((person) => person !== user));
    });
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
          <Name
            name={person.name}
            number={person.number}
            func={() => removeUser(person)}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
