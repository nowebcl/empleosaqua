import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertCircle, Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const LoginEmpresa = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    setTimeout(() => {
      setIsLoading(false);
      if (email.toLowerCase() === 'empresa' && password === 'passs123') {
        navigate('/dashboard/empresa');
      } else {
        setErrorMsg('Credenciales incorrectas. (Pista: usa "empresa" / "passs123")');
      }
    }, 1200);
  };

  return (
    <div className="login-container">
      <div className="login-left-panel">
        <div className="login-left-bg"></div>
        <div className="login-left-overlay"></div>
        <div className="login-left-content">
          <Link to="/">
            <img src="/logo.png" alt="EmpleosAqua" className="login-brand-logo" />
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="login-left-title">El talento acuícola se encuentra aquí.</h1>
            <p className="login-left-text">
              La plataforma líder que conecta a los mejores candidatos con las empresas más importantes del rubro acuícola y otros sectores productivos del sur de Chile.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="login-right-panel">
        <Link to="/" className="login-back-link">
          <ArrowLeft size={16} /> Volver
        </Link>

        <div className="login-form-wrapper">
          <div className="login-header mb-8">
            <h2>Portal Empresas</h2>
            <p>Ingresa para publicar y gestionar tus ofertas laborales</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {errorMsg && (
              <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-600 text-sm font-medium rounded-lg flex items-start gap-2">
                <AlertCircle size={16} className="mt-0.5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label className="form-label">Usuario o Correo Empresa</label>
                <div className="form-input-wrapper">
                  <Mail size={18} className="form-icon" />
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="empresa" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Contraseña</label>
                <div className="form-input-wrapper">
                  <Lock size={18} className="form-icon" />
                  <input 
                    type="password" 
                    className="form-input" 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" /> Recordar mi sesión
                </label>
                <a href="#recuperar" className="forgot-link">¿Olvidaste tu contraseña?</a>
              </div>

              <button type="submit" className="btn-submit" disabled={isLoading}>
                {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </button>
            </form>

            <div className="login-footer mt-5">
              <span>¿Nueva empresa?</span>
              <a href="#registro" className="register-link">Crear cuenta</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginEmpresa;
