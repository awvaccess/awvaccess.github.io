import axios from "axios";

const api = {
  local: 'http://localhost:8000/',
  dev: '',
  stg: '',
};

const AXIOS = axios.create({
  baseURL: api.local,
  timeout: 5000,
})

export const test = query => AXIOS.get('api/');
export const jsontest = query => AXIOS.post('json/', query);
export const sitereq = query => AXIOS.post('site/', query);