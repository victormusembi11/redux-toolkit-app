import axios from "axios";

const defaultFetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default defaultFetch;
