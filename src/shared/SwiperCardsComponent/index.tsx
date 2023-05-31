import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element';

import 'swiper/css';
import 'swiper/css/effect-cards';
import './stylesSwiper.css';
import { Avatar, CardContent, CardsContainer, ProfileName, Role, SocialMediaContainer } from './styles';
import { EffectCards } from "swiper";
import { SwiperComponentProps } from '../../types/interfaces/ISwiperProps';

export const SwiperComponent: React.FC<SwiperComponentProps> = ({profiles}) => {
   register();
   return (
      <CardsContainer>
         <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {
         profiles.map(profile => {
            return(
               <>
               <SwiperSlide key={profile.id}>
                  <CardContent>
                     <Avatar src={profile.urlAvatar} alt={`Foto perfil de ${profile.name}`}/>
                     <hr/>
                     <ProfileName>{profile.name}</ProfileName>
                     <Role>{profile.role}</Role>
                     <SocialMediaContainer>
                        {profile.socialMedia.map(pSocialMedia => {
                           return (                             
                              <a href={pSocialMedia.link} target="_blank" rel="noreferrer">
                                 <img src={pSocialMedia.urlIcon} alt={pSocialMedia.title}/>
                              </a>                              
                           );
                        })}
                     </SocialMediaContainer>
                  </CardContent>
               </SwiperSlide>
               </>
            );
         })
        }
      </Swiper>
      </CardsContainer>
   );
};
