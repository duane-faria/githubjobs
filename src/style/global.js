import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: 0;
  }

  html,body,#app{
    width:100%;
    height:100%;
  }
  
  body {
    background-color:#F6F7FB;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
  }
`;

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 10px;
`;

export default GlobalStyle;
