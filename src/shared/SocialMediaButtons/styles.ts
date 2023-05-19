import styled from "styled-components";

export const Image = styled.figure`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   position: fixed;
   right: 3rem;
   top:30%;

   z-index: 1;

   img{
      margin: 1.25rem 0rem;
      width: 2.25rem;
      transition: .3s;
   }

   img:hover{
      cursor: pointer;
      transform: scale(1.1);
   }

   animation: FadeIn 1s backwards;

   @keyframes FadeIn {
      from{
         opacity: 0;
      }

      to{
         opacity: 1;
      }
   }
`