import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    overflow-x:hidden;
    width:100%;
  }

  body {
    font-family: sans-serif;
  }  

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    list-style: none;
  }

  img {
    max-width: 100%;
  }
`;
