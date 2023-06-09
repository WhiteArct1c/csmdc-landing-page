import styled from "styled-components";

export const Nav = styled.nav`
   background-color: black;
   width: 100vw;
   height: 6rem;

   position: fixed;

   display: flex;
   align-items: center;
   justify-content: space-evenly;

   background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.5) 60%, transparent 100%);

   animation: FadeIn 1s backwards;

   z-index: 1;

   @keyframes FadeIn {
      from{
         opacity: 0;
      }

      to{
         opacity: 1;
      }
   }

   @media(max-width:1440px){
      width: 100%;
   }
`

export const NavButton = styled.li`

   transition: all .3s;

   &:hover{
      transform: scale(1.1);
      cursor: pointer;
   }

   a{
      text-decoration: none;
      color: white;
   }
`

export const Image = styled.figure`
   img{
      width: 3rem;
   }
`