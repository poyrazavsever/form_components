import React, {useState} from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Contact from "./Components/Contact"
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import "./index.css"
import { Routes, Route, NavLink } from "react-router-dom";

function App() {

  const [menuStyle, setMenuStyle] = useState("hidden")

  const openMenuBtn = () => {
    menuStyle === "hidden" ? setMenuStyle("visible") : setMenuStyle("hidden");
  }
  return (
    <div>


        <div className="bg-red-200 flex h-24 w-full items-center justify-around gap-4 z-20">

          <button onClick={openMenuBtn}>
            <AiOutlineMenu />
          </button>
          <div className={`absolute top-0 left-0 h-screen w-full transition-all duration-500 flex flex-col gap-5 justify-center z-20 items-center backdrop-blur-lg ${menuStyle === "hidden" ? "translate-x-full" : "translate-x-0"}`} >

            <button onClick={openMenuBtn} className="text-5xl text-red-900">
              <AiOutlineClose />
            </button>

            <NavLink to="/" className="navLink" onClick={openMenuBtn}>Ana Sayfa</NavLink>
            <NavLink to="/login" className="navLink" onClick={openMenuBtn}>GİRİŞ YAP</NavLink>
            <NavLink to="/register" className="navLink" onClick={openMenuBtn}>Kayıt Ol</NavLink>
            <NavLink to="/contact" className="navLink" onClick={openMenuBtn}>İLETİŞİM</NavLink>

          </div>
         
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
