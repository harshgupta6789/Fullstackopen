import { useState } from "react";
import PhonebookList from "./components/PhonebookList";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  
  const [filter, setFilter] = useState("");

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <PersonForm persons={persons} setPersons={setPersons}></PersonForm>
      <PhonebookList persons={persons} filter={filter}></PhonebookList>
    </div>
  );
};

export default App;
