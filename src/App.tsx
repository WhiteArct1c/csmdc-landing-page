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
import { TeamComponent } from "./pages/TeamComponent";
import { TeamItens } from "./types/constants/TeamItens";
import { JoinBetaComponent } from "./pages/JoinBetaComponent";
import { JoinBetaItens } from "./types/constants/JoinBetaItens";
import { Footer } from "./shared/FooterComponent";

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
        paragraph={
          {
            title: AboutRpgItens.paragraph.title,
            text: AboutRpgItens.paragraph.text
          }
        }
        image={
          {
            srcImage: AboutRpgItens.image.srcImage,
            title: AboutRpgItens.image.title
          }
        }
        isreversed={AboutRpgItens.isreversed}
        animationStart={AboutRpgItens.animationStart}
      />

      <SectionComponent
        id = {OurProduct.id}
        paragraph={
          {
            title: OurProduct.paragraph.title,
            text: OurProduct.paragraph.text
          }
        }
        image={
          {
            srcImage: OurProduct.image.srcImage,
            title: OurProduct.image.title
          }
        } 
        isreversed={OurProduct.isreversed}
        imgsize={OurProduct.imgsize}
        animationStart={OurProduct.animationStart}
      />

      <RewardsComponent
        id = {RewardsItens.id}
        title={RewardsItens.title}
        paragraph={RewardsItens.paragraph}
        imgSection={RewardsItens.imgSection}
        linkCartase={RewardsItens.linkCartase}
        animationStart={RewardsItens.animationStart}
      />

      <TeamComponent
        id={TeamItens.id}
        title={TeamItens.title}
        paragraph={TeamItens.paragraph}
        profiles={TeamItens.profiles}
        linkForm={TeamItens.linkForm}
      />
      
      <JoinBetaComponent
        id={JoinBetaItens.id}
      />

      <Footer/>
    </>
  )
}

export default App
