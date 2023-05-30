import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element';

import 'swiper/css';
import 'swiper/css/effect-cards';
import './stylesSwiper.css';
import { CardContent, CardsContainer } from './styles';
import { EffectCards } from "swiper";
import { SwiperComponentProps } from '../../types/interfaces/ISwiperProps';



export const SwiperComponent: React.FC<SwiperComponentProps> = ({profiles}) => {
   register();
   return (
      <CardsContainer bgColor='orange'>
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
                     <span>{profile.name}</span>
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
