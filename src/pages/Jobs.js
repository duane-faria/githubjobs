import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

import SearchBar from 'components/SearchBar';
import Aside from 'components/Aside';
import ListItem from 'components/ListItem';
import { getJobs } from 'api/jobs';

export default function Jobs() {
  const [jobs, setJobs] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const [loc, setLoc] = React.useState('');
  const [fullTime, setFullTime] = React.useState(true);
  const [place, setPlace] = React.useState('');
  const [desc, setDesc] = React.useState('');

  React.useEffect(() => {
    get({ location: loc || place, full_time: fullTime, description: desc });
  }, [loc, fullTime, place]);

  async function get(location) {
    setLoading(true);
    const data = await getJobs(location);
    setJobs(data);
    setLoading(false);
  }

  return (
    <>
      <SearchBar
        value={desc}
        onChange={setDesc}
        search={() => get({ description: desc })}
      />
      <Content>
        <Aside
          loc={loc}
          setLoc={setLoc}
          fullTime={fullTime}
          setFullTime={setFullTime}
          place={place}
          setPlace={setPlace}
        />
        <div>
          {loading &&
            Array(5)
              .fill()
              .map((a) => (
                <Skeleton key={a} height={120} style={{ marginBottom: 20 }} />
              ))}
          {jobs &&
            !loading &&
            jobs.map((job) => (
              <ListItem
                param={job}
                companyName={job.company}
                logoUrl={job.company_logo}
                jobTitle={job.title}
                location={job.location}
                type={job.type}
                created={job.created_at}
                key={job.id}
              />
            ))}
        </div>
      </Content>
    </>
  );
}

const Content = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 10px;
  margin-top: 42px;
  @media (max-width: 768px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: 1fr;
  }
`;
