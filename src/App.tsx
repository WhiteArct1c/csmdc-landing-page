import { MenuItens } from "./constants/MenuItens";
import { SocialMediaItens } from "./constants/SocialMediaItens";
import { InitialPhraseItens } from "./constants/InitialPhraseItens";
import { AboutRpgItens } from "./constants/AboutRpgItens";

import { HomePage } from "./pages/HomePage";
import { InitialPhrase } from "./pages/InitialPhrase";

import { NavBar } from "./shared/NavBar";
import { SocialMediaButtons } from "./shared/SocialMediaButtons";

import { GlobalStyle } from "./theme/globalStyles";
import { SectionTextImage } from "./shared/Section[Text,Image]";
import { OurProduct } from "./constants/OurProduct";

function App() {

  return (
    <>
    <GlobalStyle/>

      <NavBar 
        buttons={MenuItens}
      />

      <SocialMediaButtons
        icons={SocialMediaItens}
      />

      <HomePage 
        imgUrl="/src/assets/Logotipo_inicial.png" 
        title="Logotipo CSMD - banner principal"
      />

      <InitialPhrase
        phrase={InitialPhraseItens.text}
        author={InitialPhraseItens.author}
      />

      <SectionTextImage
        id = "sobre_o_rpg"
        paragraph={{
          title: AboutRpgItens.paragraph.title,
          text: AboutRpgItens.paragraph.text
        }}
        image={{
          srcImage: AboutRpgItens.image.srcImage,
          title: AboutRpgItens.image.title
        }}
        isReversed={false}
        animationStart="right"
      />

      <SectionTextImage
        id = "nosso_produto"
        paragraph={{
          title: OurProduct.paragraph.title,
          text: OurProduct.paragraph.text
        }}
        image={{
          srcImage: OurProduct.image.srcImage,
          title: OurProduct.image.title
        }}
        isReversed={true}
        imgSize="23rem"
        animationStart="left"
      />
    </>
  )
}

export default App
