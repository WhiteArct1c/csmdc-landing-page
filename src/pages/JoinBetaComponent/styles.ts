import { styled } from "styled-components";

export const SectionContainer = styled.section`
   width: 100%;
   height: 20rem;

   margin-bottom: 5rem;

   display: flex;
   flex-direction: column;

   align-items: center;
   justify-content: space-evenly;

   gap: 5rem;

   padding-top: 2rem;

   background: linear-gradient(180deg, #6D161B 0%, #2C0406 100%);

   p{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      gap: 10px;
   }
`

export const Title = styled.span`
   color: #FFF;
   font-size: 2.5rem;
   font-style: normal;
   font-weight: 400;
`

export const Subtitle = styled.span`
   color: #FFF;
   font-size: 1.5rem;
   font-style: normal;
   font-weight: 300;
`