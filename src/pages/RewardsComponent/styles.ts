import styled from "styled-components";

export const Section = styled.section`
   width: 100%;
   height: 50vh;
   margin-top: 7rem;

   display: flex;
   justify-content: center;
   align-items: center;


   @media(max-width: 1440px){
      figure>img{
         width: 100%;
      }

      figure>a>img{
         width: 20%;
      }

      p{
         font-size:1.1em!important;
      }
   }
   
`

export const ImageContainer = styled.figure`
   margin: 0 0.1rem;
   width: "50%";
   display: flex;
   align-items: center;
   justify-content: center;
   
`

export const Image = styled.img`
   width: 34rem;
   position: relative;
`

export const QRCode = styled.img`
   position: absolute;
   left:35%;
   bottom: 10%;
   right: 0;
   width: 10rem;

   transition: all .3s;

   &:hover{
      transform: scale(1.1);
   }

`
