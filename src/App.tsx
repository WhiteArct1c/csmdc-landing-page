import { MenuItens } from "./types/constants/MenuItens";
import { SocialMediaItens } from "./types/constants/SocialMediaItens";
import { InitialPhraseItens } from "./types/constants/InitialPhraseItens";
import { AboutRpgItens } from "./types/constants/AboutRpgItens";

import { HomePage } from "./pages/HomePage";
import { InitialPhrase } from "./pages/InitialPhrase";

import { NavBar } from "./shared/NavBar";
import { SocialMediaButtons } from "./shared/SocialMediaButtons";

import { GlobalStyle } from "./theme/globalStyles";
import { SectionTextImage } from "./shared/Section[Text,Image]";
import { OurProduct } from "./types/constants/OurProduct";

function App() {

  return (
    <>
    <GlobalStyle/>

      <NavBar 
        buttons={MenuItens.buttons}
      />

      <SocialMediaButtons
        icons={SocialMediaItens.icons}
      />

      <HomePage 
        imgUrl="/src/assets/Logotipo_inicial.png" 
        title="Logotipo CSMD - banner principal"
      />

      <InitialPhrase
        phrase={InitialPhraseItens.phrase}
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
