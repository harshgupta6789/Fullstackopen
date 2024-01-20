const Country = (countryObj) => {
  const country = countryObj.countryObj;
  const languages = Object.keys(country.languages).map((key) => [
    key,
    country.languages[key],
  ]);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital}</div>
      <div>area {country.area}</div>
      <br></br>
      <div>
        <b>languages</b>
        {languages.map((l) => (
          <li key={l[0]}>{l[1]}</li>
        ))}
      </div>
      <div>
        <h1 className="flag">{country.flag}</h1>
      </div>
    </div>
  );
};

const CountryList = ({ countryList }) => {
  if (countryList == null || countryList.length == 0) return null;
  else if (countryList.length > 1) {
    return countryList.map((i) => <li key={i.name.common}>{i.name.common}</li>);
  } else {
    return <Country countryObj={countryList[0]}></Country>;
  }
};

export default CountryList;
