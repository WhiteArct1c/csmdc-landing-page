import { createGlobalStyle } from "styled-components";
import backgroundImage from '../assets/backgrounds/bg_landing_page.png';

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
      background-repeat: no-repeat;
      background-size: 110% auto;

      scrollbar-width: 0px;
      scrollbar-color: #000;
   }

   body::-webkit-scrollbar {
      width: 0px;              
   }

   body::-webkit-scrollbar-track {
      background: black;        /* color of the tracking area */
   }

   body::-webkit-scrollbar-thumb {
      background-color: #1e1e1e;    /* color of the scroll thumb */
      border-radius: 20px;  /* creates padding around scroll thumb */
   }
`