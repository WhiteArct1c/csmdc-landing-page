import React from 'react';
import { Image, Paragraph, ParagraphTitle, Section } from './styles';
import AOS from 'aos';
import { ISectionProps } from '../../types/interfaces/ISectionProps';


export const SectionTextImage: React.FC<ISectionProps> = ({id, paragraph, image, isReversed, imgSize, animationStart}) => {
   AOS.init();
   return (
      <Section isReversed={isReversed} id={id}>
         <Paragraph 
            data-aos={`fade-${animationStart}`}
            data-aos-duration="2000"
         >
            <ParagraphTitle>{paragraph.title}</ParagraphTitle>
            {paragraph.text}
         </Paragraph>
         <Image imgSize={imgSize}
            data-aos={`fade-${animationStart}`}
            data-aos-duration="2000"
         >
            <img src={image.srcImage} alt={image.title} />
         </Image>
      </Section>
   );
};
