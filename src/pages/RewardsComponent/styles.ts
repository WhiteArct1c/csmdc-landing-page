import styled from "styled-components";

export const Section = styled.section`
   width: 100%;
   height: 50vh;
   margin-top: 4rem;

   display: flex;
   justify-content: center;
   align-items: center;

   
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
