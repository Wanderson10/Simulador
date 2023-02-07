import { Navigate, Route, Routes } from "react-router-dom";
import MainContainer from "../components/mainContainer";
import HomePage from "../pages/homepage";


export function ContainerRoutes() {
  return (
    <Routes>
      <Route path="landingpage" element={<HomePage />} />
      <Route path="dashboard" element={<MainContainer/>} />
      <Route path="*" element={<Navigate replace to={"landingpage"} />} />
    </Routes>
  );
}