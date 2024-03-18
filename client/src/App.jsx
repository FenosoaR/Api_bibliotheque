import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element= {<Connexion />}></Route>
      <Route path="/inscription" element= {<Inscription />}></Route>  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
