import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle, { Container } from 'style/global';
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
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
