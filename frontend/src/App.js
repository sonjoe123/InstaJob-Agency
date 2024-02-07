
import { Routes, Route } from "react-router-dom";

import SignUpProfessional from "./Pages/SignUpProfessional.tsx";
import SignUpEmployer from "./Pages/SignUpEmployer.tsx";
import AccountTypeSelector from "./Pages/AccountTypeSelector.tsx";
import Navigation from "./Components/Navigation/Navigation.tsx";
import SignIn from "./Pages/SignIn.tsx";
import Home from "./Pages/Home.tsx";

import './App.css';

function App() {
  return (

  <Routes>
      <Route path="/" element={ <Navigation/> }> 
        <Route index element={<Home/>}/>
        <Route path="signin" element={<SignIn/>}/>
        <Route path="signup" element={<AccountTypeSelector/>}/>
        <Route path="signup/employer" element={<SignUpEmployer/>}/>
        <Route path="signup/professional" element={<SignUpProfessional/>}/>
      </Route>
  </Routes>
  );
}

export default App;
