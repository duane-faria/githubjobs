import React from 'react';
import styled from 'styled-components';

import colors from 'style/colors';
import { fonts, icons } from 'constants/index';
import { countTimePassed } from 'utils/date';

export default function ListItem({
  logoUrl,
  companyName,
  jobTitle,
  location,
  type,
  created,
}) {
  return (
    <Container>
      <Main>
        {logoUrl ? (
          <CompanyLogo src={logoUrl} />
        ) : (
          <FakeImage>
            <span>NOT FOUND</span>
          </FakeImage>
        )}
        <Group>
          <CompanyName>{companyName}</CompanyName>
          <JobTitle>{jobTitle}</JobTitle>

          {type === 'Full Time' && <Badge>Full Time</Badge>}
        </Group>
      </Main>
      <RightCornerGroup>
        <Location>
          <Icon src={icons.world} />
          {location}
        </Location>

        <Time>
          <Icon src={icons.world} />
          {countTimePassed(created)}
        </Time>
      </RightCornerGroup>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  background-color: #fff;
  min-height: 114px;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
`;

const CompanyLogo = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 5px;
  object-fit: cover;
  margin-right: 16px;
`;

const FakeImage = styled.div`
  width: 105px;
  height: 90px;
  border-radius: 5px;
  margin-right: 16px;
  background: ${colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: ${colors.lightgray};
  text-transform: lowercase;
`;

const CompanyName = styled.h5`
  color: ${colors.secondary};
  font-family: ${fonts.roboto};
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Group = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
`;

const JobTitle = styled.h4`
  color: ${colors.secondary};
  font-family: ${fonts.roboto};
  font-size: 18px;
  font-weight: 400;
`;

const Location = styled.small`
  display: flex;
  align-items: center;
`;

const Time = styled.small`
  display: flex;
  align-items: center;
`;

const Badge = styled.div`
  border: 1px solid ${colors.secondary};
  width: 63px;
  height: 26px;
  border-radius: 3px;
  text-align: center;
  transform: translateY(10px);
  font-size: 12px;
  font-family: ${fonts.roboto};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

const RightCornerGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  width: 50%;
  color: ${colors.gray};
  font-family: ${fonts.roboto};
  font-weight: 500;
  @media (max-width: 768px) {
    width: 75%;
    margin-top: 10px;
  }
`;
