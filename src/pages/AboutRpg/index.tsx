import React from 'react';
import { Image, Paragraph, ParagraphTitle, Section } from './styles';
import AOS from 'aos';

interface AboutRpgProps {
   paragraph: {
      title: string,
      text: string
   },
   image: {
      srcImage: string,
      title: string
   }
}


export const AboutRpg: React.FC<AboutRpgProps> = ({paragraph, image}) => {
   AOS.init();
   return (
      <Section>
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
