import axios from 'axios';

const proxy = 'https://cors-anywhere.herokuapp.com/';

const api = axios.create({
  baseURL: proxy + 'https://jobs.github.com/',
});

export default api;
