import styled from "styled-components";

export const Section = styled.section`
   width: 100%;
   height: 50vh;
   margin-top: 7rem;

   display: flex;
   justify-content: center;
   align-items: center;

   a{
      display: inline-block;
      width: 32rem;
   }

   @media(max-width: 1440px){
      a{
         width: 27rem;
      }
   }

   @media(max-width: 1024px){
      justify-content: flex-start;
      a{
         width: 22rem;
      }

      p{
         font-size: 1rem;
         width: 25rem;
      }
   }
`

export const Image = styled.img`

   width: 100%;
   margin: 0;

   transition: all 0.2s;

   &:hover{
      transform: scale(1.1);
   }
`

export const QRCode = styled.img`
   position: absolute;
   left:35%;
   bottom: 10%;
   right: 0;
   width: 10rem;

   transition: all .3s;

  

   @media(max-width: 1440px){
      width: 22%;
      left: 38%;
   }

`
