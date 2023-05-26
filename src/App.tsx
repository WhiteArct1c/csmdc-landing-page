import { MenuItens } from "./types/constants/MenuItens";
import { SocialMediaItens } from "./types/constants/SocialMediaItens";
import { InitialPhraseItens } from "./types/constants/InitialPhraseItens";
import { AboutRpgItens } from "./types/constants/AboutRpgItens";

import { HomePageComponent } from "./pages/HomePageComponent";
import { InitialPhraseComponent } from "./pages/InitialPhraseComponent";

import { NavBarComponent } from "./shared/NavBarComponent";
import { SocialMediaButtonsComponent } from "./shared/SocialMediaButtonsComponent";

import { GlobalStyle } from "./theme/globalStyles";
import { SectionComponent } from "./shared/SectionComponent";
import { OurProduct } from "./types/constants/OurProduct";
import { HomePageItens } from "./types/constants/HomePageItens";
import { RewardsComponent } from "./pages/RewardsComponent";
import { RewardsItens } from "./types/constants/RewardsItens";

function App() {

  return (
    <>
    <GlobalStyle/>

      <NavBarComponent 
        buttons={MenuItens.buttons}
      />

      <SocialMediaButtonsComponent
        icons={SocialMediaItens.icons}
      />

      <HomePageComponent 
        imgUrl={HomePageItens.imgUrl}
        title={HomePageItens.title}
      />

      <InitialPhraseComponent
        phrase={InitialPhraseItens.phrase}
        author={InitialPhraseItens.author}
      />

      <SectionComponent
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

      <SectionComponent
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
        imgSize={OurProduct.imgSize}
        animationStart={OurProduct.animationStart}
      />

      <RewardsComponent
        id = {RewardsItens.id}
        title={RewardsItens.title}
        paragraph={RewardsItens.paragraph}
        imgSection={RewardsItens.imgSection}
        qrCodeImage={RewardsItens.qrCodeImage}
        linkCartase={RewardsItens.linkCartase}
        animationStart={RewardsItens.animationStart}
      />
    </>
  )
}

export default App
