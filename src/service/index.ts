import axios from "axios";

const Url = "https://api.nasa.gov/mars-photos/api/v1";

export const api = axios.create({
  baseURL: Url,
  timeout: 15000,
});
