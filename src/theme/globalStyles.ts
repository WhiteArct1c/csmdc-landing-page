import { createGlobalStyle } from "styled-components";
import backgroundImage from '../assets/bg_landing_page.png';

export const GlobalStyle = createGlobalStyle`
   *{
      padding: 0;
      margin: 0;
      border: 0;
      box-sizing: border-box;
      list-style: none;
      font-family: 'Josefin Sans', sans-serif;
   }

   html{
      scroll-behavior: smooth;
   }

   body{
      background-image: url(${backgroundImage});
      background-position: top center;
      background-size: 100% auto;
   }
`