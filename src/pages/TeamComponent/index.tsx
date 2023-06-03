import React from 'react';
import { TeamComponentProps } from '../../types/interfaces/ITeamProps';
import { SwiperComponent } from '../../shared/SwiperCardsComponent';
import { Button, ParagraphTeam, SectionContainer, ParagraphTitle } from './styles';
import AOS from 'aos';

export const TeamComponent: React.FC<TeamComponentProps> = ({id, title, paragraph, profiles, linkForm}) => {
   AOS.init();
   return (
      <SectionContainer id={id}>
         <SwiperComponent
            profiles={profiles}
         />
         <ParagraphTeam
            data-aos='fade-right'
            data-aos-duration="2000"
         >
            <ParagraphTitle>
               {title}
            </ParagraphTitle>
            {paragraph}
            <Button href={linkForm} target='_blank'>
               Quero me juntar!
            </Button>
         </ParagraphTeam>
      </SectionContainer>
   );
};
