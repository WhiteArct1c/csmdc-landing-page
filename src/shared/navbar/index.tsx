import React from "react";
import {Nav, NavButton, Image} from "./styles";
import LogoNav from '../../assets/Logo_CSMDC.svg';

interface INavbar{
   buttons: string[]
}

export const NavBar: React.FC<INavbar> = ({buttons}) => {
   return (
      <Nav>
         <Image>
            <a href="#">
               <img src={LogoNav} alt="Logo do Coroa Sombria"/>
            </a>
         </Image>
         {buttons.map((button, index) => {
            return(
               <NavButton key={index}>
                  <a href={`#${button.replace(/ /g, '_')}`}>{button}</a>
               </NavButton>
            )
         })}
      </Nav>
   );
}