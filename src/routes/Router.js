import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import HomePage from "../pages/HomePage/HomePage";
import BoardingPlanet from "../components/BoardingPlanet/BoardingPlanet";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="boardingPlanet" element={<BoardingPlanet />} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
