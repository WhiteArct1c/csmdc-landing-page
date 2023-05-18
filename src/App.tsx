import { MenuItens } from "./constants/MenuItens";
import { NavBar } from "./shared/NavBar";
import { GlobalStyle } from "./theme/globalStyles";

function App() {

  return (
    <>
    <GlobalStyle/>

      <NavBar 
        buttons={MenuItens}
      />


    </>
  )
}

export default App
