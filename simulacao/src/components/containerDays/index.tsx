import { Container2 } from "./style"
import { useSimulationContext } from "../../context/context"
import { useNavigate } from "react-router-dom";
const ContainerDays = () => {
  const { simulation, setSimulation } = useSimulationContext();
  const navigate = useNavigate();

  function returnToNavigate() {
    return navigate("/landingpage");
  }
  return (
    <Container2>
      <div><h3>Voce Recebera</h3> <button onClick={returnToNavigate}>sair</button></div>
      <p>Amanha :R$ {simulation[1]}</p>
      <p>Em 15 dias :R$ {simulation[15]}</p>
      <p>Em 30 dias :R$ {simulation[30]}</p>
      <p>Em 90 dias :R$ {simulation[90]}</p>
    </Container2>
  )
}

export default ContainerDays