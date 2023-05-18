import styled from "styled-components";

export const Image = styled.figure`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   position: fixed;
   right: 3rem;
   top:30%;

   //TODO: tooltip for the social media buttons

   img{
      margin: 1.25rem 0rem;
      width: 2.25rem;
      transition: .3s;
   }

   img:hover{
      cursor: pointer;
      transform: scale(1.1);
   }
`