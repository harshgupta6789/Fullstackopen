import { useState } from "react";
import countryService from "./services/countryService";
import Error from "./components/Error";
import CountryList from "./components/CountryList";
import { useEffect } from "react";

function App() {
  const [country, setCountry] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [shortCountryList, setShortCountryList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    countryService
      .getAll()
      .then((data) => setCountryList(data))
      .catch((e) => console.log(e));
  }, []);

  const onCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const searchCountries = (event) => {
    event.preventDefault();
    const searchCriteria = country;
    const list = countryList.filter((c) =>
      c.name.common.toLowerCase().includes(searchCriteria.toLowerCase())
    );
    if (list.length == 0) {
      setError("No results");
      setTimeout(() => {
        setError(null);
      }, 5000);
      setShortCountryList([]);
    } else if (list.length > 10) {
      setError("Too many matches, specify another filter");
      setTimeout(() => {
        setError(null);
      }, 5000);
      setShortCountryList([]);
    } else {
      setShortCountryList(list);
      setError(null);
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <div>
      <form onSubmit={searchCountries}>
        find countries<input onChange={onCountryChange} value={country}></input>
      </form>
      <Error message={error} color={"red"}></Error>
      <CountryList countryList={shortCountryList}/>
    </div>
  );
}

export default App;
