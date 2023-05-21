import React from 'react';
import { Image, Paragraph, ParagraphTitle, Section } from './styles';
import AOS from 'aos';
import { ISectionProps } from '../../types/ISectionProps';


export const SectionTextImage: React.FC<ISectionProps> = ({paragraph, image, isReversed}) => {
   AOS.init();
   return (
      <Section isReversed={isReversed}>
         <Paragraph 
            data-aos="fade-left"
            data-aos-duration="2000"
         >
            <ParagraphTitle>{paragraph.title}</ParagraphTitle>
            {paragraph.text}
         </Paragraph>
         <Image 
            data-aos="fade-left"
            data-aos-duration="2000"
         >
            <img src={image.srcImage} alt={image.title} />
         </Image>
      </Section>
   );
};
