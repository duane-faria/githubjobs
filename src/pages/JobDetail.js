import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import colors from 'style/colors';
import { fonts, icons } from 'constants/index';
import Badge from 'components/Badge';

export default function JobDetail() {
  const {
    state: { job },
  } = useLocation();
  return (
    <Container>
      <Aside>
        <BackButton to='/'>
          <img src={icons.back} style={{ marginRight: '5px' }} />
          Voltar para busca
        </BackButton>
        <H4>Como aplicar</H4>
        <ApplyInformation
          dangerouslySetInnerHTML={{ __html: job.how_to_apply }}
        />
      </Aside>
      <Main>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <JobTitle>{job.title}</JobTitle>
          {job.type == 'Full Time' && (
            <Badge style={{ marginLeft: '10px', marginTop: '-8px' }}>
              Full Time
            </Badge>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '35px',
          }}
        >
          <Image src={job.company_logo} />
          <div
            style={{
              flexDirection: 'column',
              display: 'flex',
              marginLeft: '20px',
            }}
          >
            <CompanyName>{job.company}</CompanyName>
            <Location>
              <Icon src={icons.world} />
              {job.location}
            </Location>
          </div>
        </div>
        <JobInformation dangerouslySetInnerHTML={{ __html: job.description }} />
      </Main>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 3fr;
  grid-gap: 25px;
  padding-top: 20px;
  @media (max-width: 768px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: auto;
  }
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

const ApplyInformation = styled.span`
  color: ${colors.secondary};
  font-size: 14px;
  line-height: 21px;
  font-family: ${fonts.poppins};
  word-break: break-word;
`;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.h5`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 21px;
  color: #334680;
  font-family: ${fonts.roboto};
  text-transform: capitalize;
`;

const Location = styled.small`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  font-family: ${fonts.roboto};
  color: ${colors.gray};
  align-items: center;
  display: flex;
`;

const Image = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 4px;
  object-fit: cover;
`;
const H4 = styled.h4`
  font-family: ${fonts.poppins};
  color: ${colors.gray};
  margin: 36px 0 16px 0;
  text-transform: uppercase;
  font-weight: 700;
`;

const JobInformation = styled.p`
  margin-top: 32px;
  font-family: ${fonts.roboto};
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  p,
  ul li {
    color: #334680;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    font-family: ${fonts.roboto};
    line-height: 150%;
    margin-top: 10px;
  }
`;

const JobTitle = styled.h1`
  color: ${colors.secondary};
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  font-family: ${fonts.roboto};
  display: flex;
  align-items: center;
`;

const Main = styled.main``;

const BackButton = styled(Link)`
  color: #1e86ff !important;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-family: ${fonts.poppins};
`;
