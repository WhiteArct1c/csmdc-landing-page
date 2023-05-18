import { MenuItens } from "./constants/MenuItens";
import { NavBar } from "./shared/navbar";
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
