import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle, { Container, Footer } from 'style/global';
import Logo from 'components/Logo';
import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container className='App'>
        <BrowserRouter>
          <Logo />
          <Routes />
          <Footer>Feito com {'<3'} por duane faria</Footer>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
