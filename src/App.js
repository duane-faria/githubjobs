import styled from 'styled-components';

import GlobalStyle, { Container } from 'style/global';
import SearchBar from 'components/SearchBar';
import Aside from 'components/Aside';
import ListItem from 'components/ListItem';
import Logo from 'components/Logo';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container className='App'>
        <Logo />
        <SearchBar />
        <Content>
          <Aside />
          <ListItem />
        </Content>
      </Container>
    </>
  );
}

const Content = styled.section`
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 10px;
  margin-top: 42px;
`;

export default App;
