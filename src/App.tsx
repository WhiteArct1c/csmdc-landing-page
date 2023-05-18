import { NavBar } from "./shared/navbar";
import { GlobalStyle } from "./theme/globalStyles";

function App() {

  return (
    <>
    <GlobalStyle/>

      <NavBar 
        buttons={[
            "Sobre o RPG", 
            "Nossos Produtos", 
            "Upgrades e Rewards",
            "A Equipe",
            "Inscreva-se"
        ]}
      />

      
    </>
  )
}

export default App
