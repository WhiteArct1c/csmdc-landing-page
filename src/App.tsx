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
import { HomePageItens } from "./types/constants/HomePageItens";

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
        imgUrl={HomePageItens.imgUrl}
        title={HomePageItens.title}
      />

      <InitialPhrase
        phrase={InitialPhraseItens.phrase}
        author={InitialPhraseItens.author}
      />

      <SectionTextImage
        id = {AboutRpgItens.id}
        paragraph={{
          title: AboutRpgItens.paragraph.title,
          text: AboutRpgItens.paragraph.text
        }}
        image={{
          srcImage: AboutRpgItens.image.srcImage,
          title: AboutRpgItens.image.title
        }}
        isReversed={AboutRpgItens.isReversed}
        animationStart={AboutRpgItens.animationStart}
      />

      <SectionTextImage
        id = {OurProduct.id}
        paragraph={{
          title: OurProduct.paragraph.title,
          text: OurProduct.paragraph.text
        }}
        image={{
          srcImage: OurProduct.image.srcImage,
          title: OurProduct.image.title
        }}
        isReversed={OurProduct.isReversed}
        imgSize="23rem"
        animationStart={OurProduct.animationStart}
      />
    </>
  )
}

export default App
