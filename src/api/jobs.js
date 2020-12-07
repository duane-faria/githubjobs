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
  // console.log(proxy);
  fetch('https://githubjobs-lac.vercel.app/proxy', {
    method: 'GET',
    // mode: 'no-cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((d) => console.log(d));
  // res = await res.json();
  // console.log(res);

  const gambs = await axios.get('https://githubjobs-lac.vercel.app/proxy');
  console.log(gambs, 'gambiarra');
  return data;
}
