import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  body {
      background-color: ${colors.mainBgColor} !important;
      min-height: 100vh;
  }

  ul{
      list-style-type: none
      margin: 0;
      padding: 0;
  }

  a{
    text-decoration: none !important;
    color: black !important;
  }
`;

export default GlobalStyle;
