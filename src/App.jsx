import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PostulanteDashboard from './pages/Dashboard/PostulanteDashboard';
import EmpresaDashboard from './pages/Dashboard/EmpresaDashboard';
import LoginPostulante from './pages/Login/LoginPostulante';
import LoginEmpresa from './pages/Login/LoginEmpresa';
import GenericPage from './pages/GenericPage';
import Nosotros from './pages/Nosotros/Nosotros';
import Tarifas from './pages/Tarifas/Tarifas';
import FAQ from './pages/FAQ/FAQ';
import Contacto from './pages/Contacto/Contacto';
import InfoLaboral from './pages/InfoLaboral/InfoLaboral';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/postulante" element={<LoginPostulante />} />
      <Route path="/login/empresa" element={<LoginEmpresa />} />
      <Route path="/login" element={<LoginPostulante />} /> {/* Fallback or legacy */}
      <Route path="/dashboard/postulante" element={<PostulanteDashboard />} />
      <Route path="/dashboard/empresa" element={<EmpresaDashboard />} />
      
      {/* Rutas de Menu Independientes */}
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/tarifas" element={<Tarifas />} />
      <Route path="/info-laboral" element={<InfoLaboral />} />
      <Route path="/publicar-oferta" element={<GenericPage title="Publicar Oferta" />} />
      <Route path="/tarifas-static" element={<GenericPage title="Tarifas" />} /> {/* Legacy if needed */}
      <Route path="/espacios-publicitarios" element={<GenericPage title="Espacios Publicitarios" />} />
      <Route path="/preguntas-frecuentes" element={<FAQ />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}

export default App;
