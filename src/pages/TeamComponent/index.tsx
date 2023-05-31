import React from 'react';
import { TeamComponentProps } from '../../types/interfaces/ITeamProps';
import { Paragraph, ParagraphTitle } from '../../shared/SectionComponent/styles';
import { SwiperComponent } from '../../shared/SwiperCardsComponent';
import { SectionContainer } from './styles';

export const TeamComponent: React.FC<TeamComponentProps> = ({id, title, paragraph, profiles}) => {
   return (
      <SectionContainer id={id}>
         <SwiperComponent profiles={profiles}></SwiperComponent>
         <Paragraph>
            <ParagraphTitle>
            {title}
            </ParagraphTitle>
            {paragraph}
         </Paragraph>
      </SectionContainer>
   );
};
