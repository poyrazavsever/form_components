import Login from "./Components/Login";
import Register from "./Components/Register";
import Contact from "./Components/Contact"
import "./index.css"
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
        <div className="bg-red-200 flex h-24 w-full items-center justify-center gap-4">
          <NavLink to="/" className="navLink">Ana Sayfa</NavLink>
          <NavLink to="/login" className="navLink">GİRİŞ YAP</NavLink>
          <NavLink to="/register" className="navLink">Kayıt Ol</NavLink>
          <NavLink to="/contact" className="navLink">İLETİŞİM</NavLink>
        </div>
        
        <div className="w-full h-screen flex flex-col gap-64 justify-center items-center">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      
    </div>
  );
}

export default App;
