import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PlansPage from "./pages/PlansPage";
import SubsPlanPage from "./pages/SubsPlanPage";
import HomePage from "./pages/HomePage";

export default function App() {

  const [infosUser, setInfosUser] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/subscriptions" element={<PlansPage />}></Route>
        <Route path="/subscriptions/:idPlan" element={<SubsPlanPage />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  )

}

