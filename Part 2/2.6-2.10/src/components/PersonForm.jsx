import { useState } from "react";

const PersonForm = (props) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (props.persons.find((p) => p.name === newName))
      alert(`${newName} is already added to the phonebook`);
    else {
      props.setPersons(
        props.persons.concat({
          name: newName,
          number: newNumber,
          id: props.persons.length + 1,
        })
      );
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <form>
      <h2>add a new</h2>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit" onClick={handleClick}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
