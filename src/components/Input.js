import React from 'react';
import styled from 'styled-components';

import colors from 'style/colors';

export default function Input({ icon, placeholder, containerStyle }) {
  return (
    <Container style={containerStyle}>
      {icon && <Icon src={icon} />} <StyledInput placeholder={placeholder} />
    </Container>
  );
}

const Icon = styled.img`
  margin-right: 10px;
  width: 15px;
  height: 15px;
`;

const Container = styled.div`
  background: white;
  display: flex;
  padding: 10px 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 03px;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  padding-left: 5px;
  color: ${colors.gray};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${colors.gray};
  }
  :-ms-input-placeholder {
    color: ${colors.gray};
  }

  @media (max-width: 500px) {
    width: unset;
    max-width: 100%;
  }
`;
