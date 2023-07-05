import styled from "styled-components";

export const Section = styled.section`
   width: 100%;
   height: 90vh;

   display: flex;
   justify-content: center;
   align-items: center;

   img{
      width: 43%;
      margin-right: 2%;
   }

   animation: FadeIn 1s backwards;
   animation-delay: .3s;

   @keyframes FadeIn {
      from{
         opacity: 0;
      }

      to{
         opacity: 1;
      }
   }
`