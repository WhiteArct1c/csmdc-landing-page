import styled from "styled-components";


export const SectionContainer = styled.section`
   width: 100%;
   height: 50vh;

   display: flex;
   align-items: center;
   justify-content: center;

   margin-top: 10rem;
   margin-bottom: 10rem;
`

export const Button = styled.a`
   width: 15rem;
   height: 4rem;

   background: linear-gradient(180deg, #FFB548 0%, #C87D0F 100%);
   margin-top: 2rem;

   border-radius: 1rem;
   display: flex;
   align-items: center;
   justify-content: center;

   font-weight: 400;
   font-size: 1.4rem;

   transition: .3s all;

   text-decoration: none;
   color: white;

   &:hover{
      transform: scale(1.1);
      cursor: pointer;
   }
`

export const ParagraphTeam = styled.p`
   color: white;
   font-weight: 300;
   text-align: justify;
   font-size: 1.2rem;
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

