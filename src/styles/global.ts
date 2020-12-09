import { createGlobalStyle } from 'styled-components';

import logoBackground from '../assets/images/github.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body{
    font-family: 'Roboto', sans-serif;
    max-width: 960px;
    padding: 40px 20px;
    margin: 0 auto;
    background: #F2F2FA url(${logoBackground}) no-repeat 70% top;
  }
  button{
    cursor: pointer;
  }
`;
