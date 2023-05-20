import React from 'react';
import { Author, Paragraph, Quote, SectionContainer } from './styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface InitialPhraseProps {
   phrase: string,
   author: string
}

export const InitialPhrase: React.FC<InitialPhraseProps> = ({phrase, author}) => {
   AOS.init();
   return (
      <SectionContainer>
         <Quote 
            data-aos="fade-right"
            data-aos-duration="3000"
         >
            <Paragraph>
               {phrase}
            </Paragraph>
            <Author>
               {author}
            </Author>
         </Quote>
      </SectionContainer>
   );
};
