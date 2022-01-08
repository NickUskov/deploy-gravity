import axios from 'axios';

const $api = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8'
  },
  withCredentials: false
});


$api.interceptors.request.use(config => {
  return config;
});


export default $api;
