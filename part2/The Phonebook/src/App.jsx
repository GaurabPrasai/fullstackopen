import { useState } from 'react'
import Name from "./components/Name"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (e) =>{
    setNewName(e.target.value);
  }

  const addNames = (e) => {
    e.preventDefault();
    const names = {
      name : newName
    }
    setPersons(persons.concat(names))
    setNewName('');
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNames}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {persons.map((person) => <Name key={person.name} name={person.name}/>)}
      
    </div>
  )
}

export default App