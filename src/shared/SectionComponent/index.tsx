import React from 'react';
import { Image, Paragraph, ParagraphTitle, Section } from './styles';
import AOS from 'aos';
import { ISectionProps } from '../../types/interfaces/ISectionProps';


export const SectionComponent: React.FC<ISectionProps> = ({id, paragraph, image, isreversed, imgsize, animationStart}) => {
   AOS.init();
   return (
      <Section $isreversed={isreversed} id={id}>
         <Paragraph 
            data-aos={`fade-${animationStart}`}
            data-aos-duration="2000"
         >
            <ParagraphTitle>{paragraph.title}</ParagraphTitle>
            {paragraph.text}
         </Paragraph>
         <Image imgsize={imgsize}
            data-aos={`fade-${animationStart}`}
            data-aos-duration="2000"
         >
            <img src={image.srcImage} alt={image.title} />
         </Image>
      </Section>
   );
};
