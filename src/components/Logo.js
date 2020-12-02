import React from 'react';
import styled from 'styled-components';

export default function Logo() {
  return (
    <Container>
      <Bold>Github </Bold>
      <Light>Jobs </Light>
    </Container>
  );
}

const Container = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Bold = styled.span`
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
`;

const Light = styled.span`
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
`;
