import { Link } from "react-router-dom";
import { HomePageContainer } from "./style"


 function Homepage() {
  return (
    <HomePageContainer>
    <div className="box1">
      <h1>Calculadora de parcelas</h1>
      <p>Bem-vindo!</p>
    </div>

    <div className="box2">
      <span>
      Esta com duvidas quanto custa antecipar uma transação? Use nossa Calculadora de antessipação!
      </span>
      <Link to={"/dashboard"}>Acessar Calculadora</Link>
    </div>
  </HomePageContainer>
  )
}

export default Homepage