import Api from 'api';

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
  return data;
}
