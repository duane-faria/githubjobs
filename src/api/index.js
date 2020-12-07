import axios from 'axios';

// const proxy = 'https://cors-anywhere.herokuapp.com/';
const proxy = 'https://thingproxy.freeboard.io/fetch/';

const api = axios.create({
  // baseURL: proxy + 'https://jobs.github.com/',
  baseURL: '/proxy',
});

export const url = proxy + 'https://jobs.github.com/';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default api;
