import Api, { url } from 'api';
import axios from 'axios';
export async function getJobs(params) {
  let query = [];
  if (params) {
    const fields = Object.keys(params);
    const values = Object.values(params);

    fields.forEach((field, index) => {
      if (values[index]) {
        query.push(`${field}=${values[index]}`);
      }
    });
  }

  let endpoint = `positions.json`;
  if (query.length) {
    query = query.join('&');
    endpoint += `?${query}`;
  }
  const { data } = await Api.get(endpoint);
  // // console.log(proxy);

  try {
    const gambs = await axios.get(
      'https://githubjobs-lac.vercel.app/proxy/positions.json'
    );
    console.log(gambs, 'gambiarra');
  } finally {
    const gambs2 = await axios.get('/proxy');
    console.log(gambs2, 'gambiarra2');
  }
  return data;
  // return [];
}
