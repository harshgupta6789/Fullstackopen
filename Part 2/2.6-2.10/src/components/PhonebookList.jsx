const PhonebookList = ({ persons, filter }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {persons
          .filter((p) =>
            filter.length >= 3
              ? p.name.toLowerCase().includes(filter.toLowerCase())
              : true
          )
          .map((p) => (
            <li key={p.id}>
              {p.name} {p.number}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PhonebookList;
