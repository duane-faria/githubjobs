import React from 'react';
import styled from 'styled-components';

import CheckBox from './CheckBox';
import Input from './Input';
import { icons, fonts } from 'constants/index';
import colors from 'style/colors';

const locations = ['São Paulo', 'Brasília', 'Rio de Janeiro'];

export default function Aside() {
  return (
    <Container>
      <CheckBox title='Full time' />
      <Title>Local</Title>
      <Input
        placeholder='País, estado, cidade'
        icon={icons.world}
        containerStyle={{ marginBottom: '25px', marginRight: '25px' }}
      />
      {locations.map((loc) => (
        <CheckBox title={loc} key={loc} style={{ marginBottom: '20px' }} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  margin-top: 32px;
  margin-bottom: 14px;
  font-family: ${fonts.poppins};
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
  color: ${colors.gray};
`;
