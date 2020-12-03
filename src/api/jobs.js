import Api from 'api';

export async function getJobs() {
  const { data } = await Api.get('positions.json');

  return data;
}
