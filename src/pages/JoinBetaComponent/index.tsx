import React ,{ FormEvent, useState } from 'react';
import { SectionContainer, Subtitle, Title } from './styles';
import { IJoinBetaProps } from '../../types/interfaces/IJoinBeatProps';
import emailjs from '@emailjs/browser';
import { Input, Button, styled, Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const JoinBetaComponent: React.FC<IJoinBetaProps> = ({id}) => {

   const [email, setEmail] = useState('');

   function sendEmail(event: FormEvent<HTMLFormElement>): void{
      event.preventDefault();

      emailjs.sendForm('service_5u6ytaf', "template_05dkbvl", event.currentTarget, 'fnNNO8pKjCrhZwk1S')
         .then(() => {
            toast.success("Seu email foi enviado com sucesso! ", {
               position: toast.POSITION.TOP_RIGHT,
               hideProgressBar: true,
               autoClose: 3000,
               theme: 'dark'
            });
            //console.log(result);
            setEmail('');
         })
         .catch(() =>{
            toast.error("Houve algum erro, tente novamente mais tarde! ", {
               position: toast.POSITION.TOP_RIGHT,
               hideProgressBar: true,
               autoClose: 3000,
               theme: 'dark'
            });
            //console.log(error);
         }
      );
   }

   const InputBeta = styled(Input)({
      height: 55,
      width:'100%',
      marginRight: 40,
      color:'#fff',
      fontFamily:[
         'Josefin Sans',
         'sans-serif'
      ].join(','),
      fontSize: 23
   });

   const ButtonSend = styled(Button)({
      height: 60,
      borderRadius: 15,
      paddingLeft: 40,
      paddingRight: 40,
      backgroundColor: '#C87D0F',
      color: '#FFF',
      fontSize: 20,
      fontFamily:[
         'Josefin Sans',
         'sans-serif'
      ].join(','),
      '&:hover':{
         backgroundColor: '#83540e',
      }
   });

   return (
      <SectionContainer id={id}>
         <p>
            <Title>
               Inscreva-se para o nosso teste beta!
            </Title>
            <Subtitle>
               Faça sua inscrição em nosso Teste Beta e tenha a oportunidade de desfrutar de nossos recursos antecipadamente!
            </Subtitle>
         </p>
         <Box
            sx={{
               display:'flex',
               justifyContent:"center",
               alignItems:"center",
               width: 700
            }}
            component="form"
            onSubmit={sendEmail}
         >
            <InputBeta
               required
               placeholder="Digite seu email aqui..."
               name='user_email'
               type={"email"}
               defaultValue={email}
               onBlur={(event) => {
                  return setEmail(event.target.value);
               }}
            /> 
            <ButtonSend type="submit">Enviar!</ButtonSend>
         </Box>
         <ToastContainer/>
      </SectionContainer>
   );
};
