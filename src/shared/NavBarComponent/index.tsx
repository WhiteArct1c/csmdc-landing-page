import React from "react";
import {Nav, NavButton, Image} from "./styles";
import { INavbar } from "../../types/interfaces/INavbar";
import LogoNav from '../../assets/Logo_CSMDC.svg';

export const NavBarComponent: React.FC<INavbar> = ({buttons}) => {
   return (
      <Nav>
         <Image>
            <a href="#">
               <img src={LogoNav}alt="Logo do Coroa Sombria"/>
            </a>
         </Image>
         {buttons.map((button, index) => {
            return(
               <NavButton key={index}>
                  <a href={`#${button.replace(/\s/g, '_').toLowerCase()}`}>{button}</a>
               </NavButton>
            )
         })}
      </Nav>
   );
}