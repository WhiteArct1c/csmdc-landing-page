import styled from "styled-components";

export const SectionContainer = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;

   width: 100%;
   height: 30vh;

   margin-bottom: 15rem;

   @media (max-width: 1440px) {
      p{
         font-size: 1.2rem;
      }

      span{
         font-size: 1.2rem;
      }
   }

   @media(max-width: 1024px){

      p{
         font-size:1em;
      }

      span{
         font-size:1em;
      }
   }

`

export const Quote = styled.div`
   width: 48rem;
`

export const Paragraph = styled.p`
   font-weight: 300;
   font-style: italic;
   font-size: 1.4rem;
   line-height: 1.2;
   color: white;
   text-align: justify; 
`

export const Author = styled.span`
   color: white;
   font-weight: 200;
   font-size: 1.6rem;
   line-height: 25px;
   text-align: right;

   padding-right: 1rem;
   padding-top: 0.5rem;

   display: inline-block;

   width: 100%;
`