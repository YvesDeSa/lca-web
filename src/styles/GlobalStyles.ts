import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #000;
    color: #000;
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    html {
      font-size: 16px;
    }
  }

  @media (max-width: 767px) {
    html {
      font-size: 14px;
    }
  }
`;
