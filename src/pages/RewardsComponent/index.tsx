import React from 'react';
import { IRewardsProps } from '../../types/interfaces/IRewardsProps';
import { Image, Section } from './styles';
import { Paragraph, ParagraphTitle } from '../../shared/SectionComponent/styles';
import AOS from 'aos';

export const RewardsComponent: React.FC<IRewardsProps> = ({ id, title, paragraph, imgSection, linkCartase, animationStart }: IRewardsProps) => {
   AOS.init();
   return (
      <Section id={id}>
         <Paragraph
            data-aos={`fade-${animationStart}`}
            data-aos-duration="2000"
         >
            <ParagraphTitle>{title}</ParagraphTitle>
            {paragraph}
         </Paragraph>
         <a href={linkCartase} 
            target='_blank'
            data-aos={`fade-${animationStart}`}
            data-aos-duration="2000"
         >
            <Image src={imgSection} alt="Imagem dos itens de apoiador do RPG" />
         </a>
      </Section>
   );
};