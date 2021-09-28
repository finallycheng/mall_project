// const axios = require('axios');
import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://localhost:5000"
  });
  instance.interceptors.response.use(result => {
    return result.data;
  });
  return instance(config);
}
