import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PostulanteDashboard from './pages/Dashboard/PostulanteDashboard';
import EmpresaDashboard from './pages/Dashboard/EmpresaDashboard';
import LoginPostulante from './pages/Login/LoginPostulante';
import LoginEmpresa from './pages/Login/LoginEmpresa';
import GenericPage from './pages/GenericPage';

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
      <Route path="/nosotros" element={<GenericPage title="Nosotros" />} />
      <Route path="/info-laboral" element={<GenericPage title="Información Laboral" />} />
      <Route path="/publicar-oferta" element={<GenericPage title="Publicar Oferta" />} />
      <Route path="/tarifas" element={<GenericPage title="Tarifas" />} />
      <Route path="/espacios-publicitarios" element={<GenericPage title="Espacios Publicitarios" />} />
      <Route path="/preguntas-frecuentes" element={<GenericPage title="Preguntas Frecuentes" />} />
      <Route path="/contacto" element={<GenericPage title="Contacto" />} />
    </Routes>
  );
}

export default App;
