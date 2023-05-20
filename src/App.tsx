import { MenuItens } from "./constants/MenuItens";
import { SocialMediaItens } from "./constants/SocialMediaItens";
import { InitialPhraseItens } from "./constants/PhrasesAndParagraphs";
import { HomePage } from "./pages/HomePage";
import { InitialPhrase } from "./pages/InitialPhrase";

import { NavBar } from "./shared/NavBar";
import { SocialMediaButtons } from "./shared/SocialMediaButtons";

import { GlobalStyle } from "./theme/globalStyles";

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

    </>
  )
}

export default App
