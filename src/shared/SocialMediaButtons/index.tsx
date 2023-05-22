import React from "react";
import { Image } from "./styles";
import { ISocialMediaButtons } from "../../types/interfaces/ISocialMediaButtons";

export const SocialMediaButtons: React.FC<ISocialMediaButtons> = ({icons}:ISocialMediaButtons) =>{
   return (
      <Image>
         {icons.map((icon, index) => {
            return (
               <a key={index} href={icon.linkSocialMedia} target="_blank">
                  <img src={icon.srcIcon} alt={icon.title}/>
               </a>
            );
         })}
      </Image>
   );
}