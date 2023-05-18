import styled from "styled-components";

export const Nav = styled.nav`
   background-color: black;
   width: 100vw;
   height: 6rem;

   position: fixed;

   display: flex;
   align-items: center;
   justify-content: space-evenly;

   background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.63) 52.6%, transparent 100%);
`
export const NavButton = styled.li`
   color: white;

   transition: all .3s;

   &:hover{
      transform: scale(1.1);
      cursor: pointer;
   }
`