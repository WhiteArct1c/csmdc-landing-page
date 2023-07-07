import { ISectionProps } from "../interfaces/ISectionProps";
import OurProductImage from '../../assets/Produtos.png';

export const OurProduct: ISectionProps = {
   id: "nosso_produto",
   paragraph: {
      title: "Nosso produto",
      text: "Você encontrará uma variedade de produtos incríveis que estamos criando graças ao apoio da nossa comunidade no Catarse. Isso inclui um livro de regras completo, que vai ajudá-lo a se familiarizar com todas as nuances do nosso universo de fantasia sombria. Além disso, teremos um livro de cenário detalhado, que irá levá-lo em uma jornada através de um mundo mágico e perigoso. E, para garantir que você possa jogar com facilidade, estamos criando um sistema no Foundry que tornará a jogabilidade ainda mais emocionante e envolvente. Não perca esta oportunidade de obter acesso a todos esses produtos incríveis! Apoie agora nossa campanha no Catarse e ajude-nos a trazer esse universo de fantasia sombria à vida!"
   },
   image: {
      srcImage: OurProductImage,
      title: "Image de dois produtos oferecidos pelo CSMDC"
   },
   imgsize: "80%",
   isreversed: true,
   animationStart: "right"
}