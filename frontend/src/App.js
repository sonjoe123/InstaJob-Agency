
import { Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn.tsx";
import SignUpProfessional from "./Pages/SignUpProfessional.tsx";
import Home from "./Pages/Home.tsx";
import Navigation from "./Components/Navigation/Navigation.tsx";
import AccountTypeSelector from "./Pages/AccountTypeSelector.tsx";

import './App.css';

function App() {
  return (

  <Routes>
      <Route path="/" element={ <Navigation/> }> 
        <Route index element={<Home/>}/>
        <Route path="signin" element={<SignIn/>}/>
        <Route path="signup" element={<AccountTypeSelector/>}/>
        <Route path="signup/professional" element={<SignUpProfessional/>}/>
        {/* <Route path="signup/employer" element={<SignUp/>}/> */}
      </Route>
  </Routes>
  );
}

export default App;
