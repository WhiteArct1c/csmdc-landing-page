import styled from "styled-components";

interface CardThemeProp {
   bgColor: string
}

export const CardsContainer = styled.div<CardThemeProp>`
   width: 20rem;
   height: 100%;
   color: white;

   display: flex;
   justify-content: center;
   text-align: center;
   align-items: center;

   border: 1px red solid;

   .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
      font-size: 1.5rem;
      font-weight: bold;
      color: #fff;

      background-color: ${(props) => props.bgColor};
   }
`

export const CardContent = styled.div`

`