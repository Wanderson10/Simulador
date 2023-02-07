import MainContainer from "./components/mainContainer";
import { Body } from "./styleApp";
import Global from "./styles/global";
import { ContainerRoutes } from "./routes";
function App() {

  return (
     <Body>
      <Global></Global>
       <ContainerRoutes/>
    </Body>
  )
   
}

export default App;
