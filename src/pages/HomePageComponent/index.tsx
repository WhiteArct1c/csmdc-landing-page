import React from 'react';
import { Section } from './styles';
import { IHomePageProps } from '../../types/interfaces/IHomePageProps';

export const HomePageComponent: React.FC<IHomePageProps> = ({imgUrl, title}) => {
   return (
      <Section>
         <img src={imgUrl} alt={title} />
      </Section>
   );
};

