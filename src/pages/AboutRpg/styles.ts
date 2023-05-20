import styled from "styled-components";

export const Section = styled.section`
   width: 100%;
   height: 60vh;
   margin-top: 4rem;

   display: flex;
   justify-content: center;
   align-items: center;
`

export const Image = styled.figure`
   img{
      width: 27rem;
   }
`

export const Paragraph = styled.p`
   color: white;
   font-weight: 300;
   text-align: justify;
   font-size: 1.2rem;
   line-height: 1.2;

   width: 40%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-right: 10rem;
`

export const ParagraphTitle = styled.span`
   margin-bottom: 2rem;
   font-weight: 400;
   font-size: 2rem;
`