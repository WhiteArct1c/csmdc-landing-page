import styled from "styled-components";


export const CardsContainer = styled.div`
   width: 21rem;
   height: 29rem;
   color: white;

   display: flex;
   justify-content: center;
   text-align: center;
   align-items: center;

   margin-right: 5rem;

   .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      font-size: 1.5rem;
      font-weight: bold;
      color: #fff;

      background: linear-gradient(180deg, #FFB548 0%, #C87D0F 100%);

      filter: drop-shadow(11px 0px 4px rgba(0, 0, 0, 0.25));
   }
`

export const CardContent = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

export const Avatar = styled.img`
   margin-bottom: 1.5rem;
   border: 1px white solid;
   padding: 0.5rem;

   border-radius: 50%;

   width: 10rem;
   height: 10rem;
`

export const ProfileName = styled.span`

`
export const Role = styled.span`
   font-weight: 200;
   text-align: center;
   font-size: 1.4rem;
`

export const SocialMediaContainer = styled.div`
   margin-top: 3rem;

   display: flex;
   align-items: center;
   justify-content: center;
   gap: 2rem;

   width: 70%;
   height: 3rem;

   a{
      text-decoration: none;
      color: white;

      img{
         width: 3rem;
      }
   }
`