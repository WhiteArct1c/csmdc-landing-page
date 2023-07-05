import React, {useState} from 'react';
import { TeamComponentProps } from '../../types/interfaces/ITeamProps';
import { SwiperComponent } from '../../shared/SwiperCardsComponent';
import { ParagraphTeam, SectionContainer, ParagraphTitle } from './styles';
import AOS from 'aos';
import { Button, Dialog, DialogContent } from '@mui/material';
import { styled } from '@mui/material/styles'

export const TeamComponent: React.FC<TeamComponentProps> = ({id, title, paragraph, profiles}) => {
   AOS.init();

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const ButtonJoin = styled(Button)({
      height: 60,
      fontSize: 20,
      color: '#FFFFFF',
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 20,
      backgroundColor: '#C87D0F',
      borderRadius: 15,
      fontWeight: 400,
      fontFamily:[
         'Josefin Sans',
         'sans-serif'
      ].join(','),
      '&:hover':{
         backgroundColor: '#4d3004'
      }
   });
    
   return (
      <>
         <SectionContainer id={id}>
            <SwiperComponent
               profiles={profiles}
            />
            <ParagraphTeam
               data-aos='fade-right'
               data-aos-duration="2000"
            >
               <ParagraphTitle>
                  {title}
               </ParagraphTitle>
               {paragraph}
               <ButtonJoin onClick={handleOpen}>
                  Quero me juntar!
               </ButtonJoin>         
            </ParagraphTeam>
         </SectionContainer>
         <Dialog 
            open={open}
            onClose={handleClose}
         >
            <DialogContent
               sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
               }}
            >
               <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeaTjO-U41eIwQCLxj3ZBy9yGI8d1BFkrYasULFnevoHeQNlQ/viewform?embedded=true" 
                  width="550" 
                  height="500"
               >
                  Carregando…
               </iframe>
            </DialogContent>
         </Dialog>
      </>
   );
};
