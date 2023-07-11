import styled from "styled-components";

interface ISection{
   isreversed: boolean
}

interface IImage {
   imgsize?: string
}

export const Section = styled.section<ISection>`
   width: 100%;
   height: 50vh;
   margin-top: 7rem;

   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: ${(props) => props.isreversed ? "row-reverse" : "row"};


   @media(max-width: 1440px){
      figure{
         img{
            width: 19.5rem;
         }
      }

      p{
         font-size: 1.1rem;
      }
   }

   @media(max-width: 1024px){
      figure{
         img{
            width: 16rem;
         }
      }

      p{
         font-size: 1rem;
      }
   }
`

export const Image = styled.figure<IImage>`
   margin: 0 0.1rem;
   display: flex;   justify-content: center;
   align-items: center;
   width: "50%";
   img{
      width: ${(props) => props.imgsize || "24rem"};
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