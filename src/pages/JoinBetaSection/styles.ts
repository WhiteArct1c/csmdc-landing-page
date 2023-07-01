import { styled } from "styled-components";

export const SectionContainer = styled.section`
   width: 100%;
   height: 40vh;

   display: flex;
   flex-direction: column;

   align-items: center;

   gap: 5rem;

   margin-top: 12rem;
   margin-bottom: 10rem;

   background: linear-gradient(180deg, #6D161B 0%, #2C0406 100%);

   p{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      margin-top: 2rem;

      gap: 10px;
   }
`

export const Title = styled.span`
   color: #FFF;
   font-size: 3rem;
   font-style: normal;
   font-weight: 400;
`

export const Subtitle = styled.span`
   color: #FFF;
   font-size: 1.7rem;
   font-style: normal;
   font-weight: 300;
`