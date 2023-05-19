import React from 'react';
import { Section } from './styles';

interface IHomePageProps {
   imgUrl: string,
   title: string
}

export const HomePage: React.FC<IHomePageProps> = ({imgUrl, title}) => {
   return (
      <Section>
         <img src={imgUrl} alt={title} />
      </Section>
   );
};

