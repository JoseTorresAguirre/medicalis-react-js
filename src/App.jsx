import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Especialidades from "./pages/Especialidades";
import Contacto from "./pages/Contacto";
import Agendar from "./pages/Agendar";
import Footer from "./components/Footer/Footer";
import IniciarSesion from "./pages/IniciarSesion";
import Registrate from "./pages/Registrate";
import Admin from "./pages/login/Admin";
import Especialista from "./pages/login/Especialista";
import Paciente from "./pages/login/paciente";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/agendar" element={<Agendar />} />
        <Route path="/iniciarsesion" element={<IniciarSesion />} />
        <Route path="/registrate" element={<Registrate />} />
        <Route path="/paciente" element={<Paciente />} />
        <Route path="/especialista" element={<Especialista />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;
