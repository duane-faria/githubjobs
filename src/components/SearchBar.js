import React from 'react';
import styled from 'styled-components';

import imagebg from 'assets/images/backgroundImg.png';

export default function SearchBar() {
  return (
    <SearchWrapper>
      <BunttonGroup>
        <SearchInput placeholder='Título, empresas, nível, benefícios' />
        <SearchButton>buscar</SearchButton>
      </BunttonGroup>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.section`
  height: 150px;
  max-width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: url(${imagebg}) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 10px;
  outline: none;
  border: none;
  padding: 20px;

  @media (max-width: 500px) {
    width: unset;
    max-width: 100%;
  }
`;

const SearchButton = styled.button`
  color: white;
  background: #1e86ff;
  border: none;
  outline: none;
  padding: 15px 40px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
`;

const BunttonGroup = styled.div`
  width: auto;
  border-radius: 10px;
  background: white;
  display: flex;
  justify-content: space-between;
  display: flex;
  flex: 1;
  margin: 0 10rem;
`;
