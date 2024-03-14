import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    max-width: 430px;
    max-height: 932px;
  }
  a {
  color: inherit;
  text-decoration: none;
  }
  li {
  list-style: none;
  }
  body {
      margin: 0; line-height: normal;
    }
  

  button{
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

export default GlobalStyle;
