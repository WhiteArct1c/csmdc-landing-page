import { MenuItens } from "./constants/MenuItens";
import { SocialMediaItens } from "./constants/SocialMediaItens";

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

    </>
  )
}

export default App
