import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import './stylesSwiper.css';
import { Avatar, CardContent, CardsContainer, ProfileName, Role, SocialMediaContainer } from './styles';
import { EffectCards } from "swiper/modules";
import { SwiperComponentProps } from '../../types/interfaces/ISwiperProps';
import AOS from 'aos';


export const SwiperComponent: React.FC<SwiperComponentProps> = ({profiles}) => {
   AOS.init();

   return (
      <CardsContainer
         data-aos='fade-right'
         data-aos-duration="2000"
      >
         <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
         >
         {
            profiles.map((profile, index) => {
               return(
                  <SwiperSlide key={index}>
                     <CardContent>
                        <Avatar src={profile.urlAvatar} alt={`Foto perfil de ${profile.name}`}/>
                        <hr/>
                        <ProfileName>{profile.name}</ProfileName>
                        <Role>{profile.role}</Role>
                        <SocialMediaContainer>
                           {profile.socialMedia.map((pSocialMedia, index) => {
                              return (                             
                                 <a href={pSocialMedia.link} target="_blank" rel="noreferrer" key={index}>
                                    <img src={pSocialMedia.urlIcon} alt={pSocialMedia.title}/>
                                 </a>                              
                              );
                           })}
                        </SocialMediaContainer>
                     </CardContent>
                  </SwiperSlide>
               );
            })
         }
         </Swiper>
      </CardsContainer>
   );
};
