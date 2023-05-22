import styled from "styled-components";

interface ISection{
   isReversed: boolean
}

interface IImage {
   imgSize?: string
}

export const Section = styled.section<ISection>`
   width: 100%;
   height: 60vh;
   margin-top: 4rem;

   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: ${(props) => props.isReversed ? "row-reverse" : "row"}
`

export const Image = styled.figure<IImage>`
   img{
      width: ${(props) => props.imgSize || "27rem"};
      margin: 1rem;
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
   margin: 0 5rem;
`

export const ParagraphTitle = styled.span`
   margin-bottom: 2rem;
   font-weight: 400;
   font-size: 2rem;
`