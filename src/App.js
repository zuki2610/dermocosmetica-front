import './App.css';  
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Patient from "./Components/Patient";
import Medicines from "./Components/Medicines";


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/dermocosmetica/home" element={<Home />} />
          <Route path="/dermocosmetica/patient" element={<Patient />} />
          <Route path="/dermocosmetica/medicinas" element={<Medicines />} />
          <Route exact path="/" element={<Home />} />
          
        </Routes>
      </main>
    </BrowserRouter>
  );
}


export default App;
