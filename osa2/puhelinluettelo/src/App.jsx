import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("Set new name");
  const [showAll, setShowAll] = useState(true);

  const addName = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    console.log({persons});
    const nameObject = {
      content: newName,
      id: String(persons.length + 1),
    };
    setPersons(persons.concat(nameObject));
    setNewName("");
  };

  const handleTextChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleTextChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      {showAll.map(persons =>
        <h2>Numbers</h2>
      }
    </div>
  );
};

export default App;
