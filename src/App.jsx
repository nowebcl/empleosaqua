import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PostulanteDashboard from './pages/Dashboard/PostulanteDashboard';
import EmpresaDashboard from './pages/Dashboard/EmpresaDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/postulante" element={<PostulanteDashboard />} />
      <Route path="/dashboard/empresa" element={<EmpresaDashboard />} />
    </Routes>
  );
}

export default App;
