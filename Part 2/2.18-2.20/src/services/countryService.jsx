import axios from "axios";

const url = "https://studies.cs.helsinki.fi/restcountries/api";

const getAll = async () => {
  const request = axios.get(`${url}/all`);
  const response = await request;
    return response.data;
};

const getSingle = (country) => {
  const request = axios.get(`${url}/name/${country}`);
  return request.then((response) => response.data);
};

export default { getAll, getSingle };
