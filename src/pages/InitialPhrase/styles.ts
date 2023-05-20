import styled from "styled-components";

export const SectionContainer = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;

   width: 100%;
   height: 50vh;
`

export const Quote = styled.div`
   width: 48rem;
`

export const Paragraph = styled.p`
   font-weight: 300;
   font-style: italic;
   font-size: 1.5rem;
   color: white;
   text-align: justify;
`

export const Author = styled.span`
   color: white;
   font-weight: 200;
   font-size: 25px;
   line-height: 25px;
   text-align: right;

   padding-right: 1rem;
   padding-top: 0.5rem;

   display: inline-block;

   width: 100%;
`