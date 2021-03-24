// const axios = require('axios');
import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://127.0.0.1:5000"
  });
  instance.interceptors.response.use(result => {
    return result.data;
  });
  return instance(config);
}
