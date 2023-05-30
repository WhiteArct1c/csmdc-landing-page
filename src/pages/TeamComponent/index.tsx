import React from 'react';
import { TeamComponentProps } from '../../types/interfaces/ITeamProps';
import { Section } from '../RewardsComponent/styles';
import { Paragraph, ParagraphTitle } from '../../shared/SectionComponent/styles';
import { SwiperComponent } from '../../shared/SwiperCardsComponent';

export const TeamComponent: React.FC<TeamComponentProps> = ({id, title, paragraph, profiles}) => {
   return (
      <Section id={id}>
         <SwiperComponent profiles={profiles}></SwiperComponent>
         <Paragraph>
            <ParagraphTitle>
            {title}
            </ParagraphTitle>
            {paragraph}
         </Paragraph>
      </Section>
   );
};
