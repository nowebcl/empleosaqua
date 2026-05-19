import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertCircle, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterEmpresaModal from './RegisterEmpresaModal';
import './Login.css';

const LoginEmpresa = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const navigate = useNavigate();

  // Pre-seed a default company user in localStorage for testing
  useEffect(() => {
    if (!localStorage.getItem('registeredCompanyUser')) {
      const defaultUser = {
        nombres: 'Andrés',
        apellidos: 'Larraín',
        email: 'contacto@aquachile.cl',
        telefono: '987654321',
        rut: '15.342.981-K',
        cargo: 'Gerente de Personas',
        contrasena: 'Aqua2026!'
      };
      localStorage.setItem('registeredCompanyUser', JSON.stringify(defaultUser));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    setTimeout(() => {
      setIsLoading(false);
      // Allow default mockup email, any email registered in localStorage, or the seeded one
      const registeredUser = JSON.parse(localStorage.getItem('registeredCompanyUser'));
      const isRegistered = registeredUser && registeredUser.email.toLowerCase() === email.toLowerCase();
      
      if (email.toLowerCase() === 'yaponte@b2bmg.cl' || email.toLowerCase() === 'empresa@aqua.cl' || isRegistered) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userRole', 'empresa');
        
        // If it's a registered user (including the pre-seeded one), save their active session profile
        if (isRegistered) {
          localStorage.setItem('activeCompanyUser', JSON.stringify(registeredUser));
        } else {
          // Default mockup company user
          localStorage.setItem('activeCompanyUser', JSON.stringify({
            nombres: 'Ricardo',
            apellidos: 'Epuyao',
            email: 'esmeralalb@gmail.com',
            telefono: '965261088',
            rut: '17247980-4',
            cargo: 'Ejecutivo Comercial'
          }));
        }
        
        navigate('/dashboard/empresa#general');
      } else {
        setErrorMsg('Credenciales incorrectas. (Pista: usa "contacto@aquachile.cl" con contraseña "Aqua2026!")');
      }
    }, 1000);
  };

  const handleCancel = () => {
    navigate('/');
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
            <h1 className="login-left-title">El talento acuícola se encuentra aquí</h1>
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

        {/* Floating Modal-Style Card as in Image 2 */}
        <div className="login-modal-card-wrapper">
          <div className="login-modal-card">
            <button className="login-modal-card-close" onClick={handleCancel} aria-label="Cerrar">
              <X size={20} />
            </button>
            
            <div className="login-modal-card-header">
              <h3>Ingresa con tu usuario de empresa</h3>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-600 text-sm font-medium rounded-lg flex items-start gap-2">
                <AlertCircle size={16} className="mt-0.5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="login-modal-card-form">
              <div className="form-group">
                <div className="form-input-wrapper">
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="yaponte@b2bmg.cl" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
              </div>

              <div className="form-group relative">
                <div className="form-input-wrapper">
                  <input 
                    type="password" 
                    className="form-input" 
                    placeholder="•••••••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>
                <a href="#recuperar" className="forgot-link-orange">¿Olvidaste tu contraseña?</a>
              </div>

              <div className="modal-card-buttons mt-6">
                <button type="button" className="btn-modal-card-cancel" onClick={handleCancel}>
                  Cancelar
                </button>
                <button type="submit" className="btn-modal-card-submit" disabled={isLoading}>
                  {isLoading ? 'entrar...' : 'entrar'}
                </button>
              </div>
            </form>

            <div className="login-modal-card-footer mt-6">
              <span>¿Tu empresa no estás registrada?</span>
              <button 
                type="button" 
                onClick={() => setIsRegisterOpen(true)} 
                className="register-link-blue"
              >
                Regístrala Aquí
              </button>
            </div>
          </div>
        </div>
      </div>

      <RegisterEmpresaModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />
    </div>
  );
};

export default LoginEmpresa;
