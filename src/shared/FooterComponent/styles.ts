import { styled } from "styled-components";

export const FooterContainer = styled.footer`
   width: 100%;
   height: 5rem;

   display: flex;
   align-items: center;
   justify-content: center;

   p{
      color: #fff;
   }

   @media(max-width: 1024px){
      p{
         font-size: 0.9rem;
      }
   }
`