import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
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
