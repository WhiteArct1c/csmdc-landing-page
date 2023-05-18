import React from "react";
import {Nav, NavButton} from "./styles";

interface INavbar{
   buttons: string[]
}

export const NavBar: React.FC<INavbar> = ({buttons}) => {
   return (
      <Nav>
         {buttons.map((button, index) => {
            return(
               <NavButton key={index}>
                  {button}
               </NavButton>
            )
         })}
      </Nav>
   );
}