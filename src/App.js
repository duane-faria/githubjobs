import styled from 'styled-components';

import GlobalStyle, { Container } from 'style/global';
import SearchBar from 'components/SearchBar';
import Logo from 'components/Logo';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container className='App'>
        <Logo />
        <SearchBar />
        <Content>
          <div style={{ background: 'tomato' }}>oi</div>
          <div style={{ background: 'blue' }}>ola</div>
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
`;

export default App;
