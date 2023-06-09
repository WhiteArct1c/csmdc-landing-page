import styled from "styled-components";


export const SectionContainer = styled.section`
   width: 100%;
   height: 65vh;

   display: flex;
   align-items: center;
   justify-content: center;

   margin-top: 7rem;
   margin-bottom: 10rem;

   @media(max-width:1440px){
      p{
         font-size: 1.15rem;
      }
   }

   @media(max-width:1024px){
      p{
         font-size: 1rem;
      }
   }
`

export const ParagraphTeam = styled.p`
   color: white;
   font-weight: 300;
   text-align: justify;
   font-size: 1.3rem;
   line-height: 1.2;

   width: 40%;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 5rem;
`

export const ParagraphTitle = styled.span`
   margin-bottom: 2rem;
   font-weight: 400;
   font-size: 2rem;
`

