import React from 'react';
import styled from 'styled-components';

import SearchBar from 'components/SearchBar';
import Aside from 'components/Aside';
import ListItem from 'components/ListItem';
import { getJobs } from 'api/jobs';

export default function Jobs() {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    async function get() {
      let dataStoraged = localStorage.getItem('jobs');
      if (dataStoraged) {
        setJobs(JSON.parse(dataStoraged));
        console.log('cache on');
        console.log(jobs);
        return;
      }
      const data = await getJobs();
      setJobs(data);
      localStorage.setItem('jobs', JSON.stringify(data));
    }
    get();
  }, []);

  return (
    <>
      <SearchBar />
      <Content>
        <Aside />
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
