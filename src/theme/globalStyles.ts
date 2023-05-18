import { createGlobalStyle } from "styled-components";

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
      background-color: #1E1E1E; // TODO: use background-image with the Figma's bg_img
   }
`