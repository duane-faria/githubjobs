import React from 'react';
import styled from 'styled-components';

import SearchBar from 'components/SearchBar';
import Aside from 'components/Aside';
import ListItem from 'components/ListItem';
import { getJobs } from 'api/jobs';

export default function Jobs() {
  const [jobs, setJobs] = React.useState([]);

  const [loc, setLoc] = React.useState(undefined);
  const [fullTime, setFullTime] = React.useState(true);
  const [place, setPlace] = React.useState(undefined);
  const [desc, setDesc] = React.useState(undefined);

  React.useEffect(() => {
    get({ location: loc || place, full_time: fullTime, description: desc });
  }, [loc, fullTime, place, desc]);

  async function get(location) {
    const data = await getJobs(location);
    setJobs(data);
  }

  return (
    <>
      <SearchBar value={desc} onChange={setDesc} />
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
          {jobs &&
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
