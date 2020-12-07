import axios from 'axios';

const api = axios.create({
  baseURL: '/proxy/',
});

export default api;
