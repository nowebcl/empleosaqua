import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertCircle, Mail, Lock, UserCircle, Building2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import RegisterModal from './RegisterModal';
import './Login.css';

const Login = () => {
  const role = 'postulante';
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const navigate = useNavigate();

  const content = {
    postulante: {
      leftTitle: 'Las mejores oportunidades laborales están aquí',
      leftText: 'Accede a las vacantes de las empresas más importantes del rubro acuícola y otros sectores productivos del sur de Chile. Crea tu perfil y postula.',
      title: 'Bienvenido de vuelta',
      subtitle: 'Accede para gestionar tus postulaciones y perfil laboral.',
      registerText: '¿No tienes cuenta?',
      registerLinkAction: 'Regístrate aquí',
    },
    empresa: {
      leftTitle: 'El talento acuícola se encuentra aquí',
      leftText: 'La plataforma líder que conecta a los mejores candidatos con las empresas más importantes del rubro acuícola y otros sectores productivos del sur de Chile.',
      title: 'Portal de Empresas',
      subtitle: 'Ingresa para publicar y gestionar tus ofertas laborales.',
      registerText: '¿Nueva empresa?',
      registerLinkAction: 'Crear cuenta',
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    setTimeout(() => {
      setIsLoading(false);
      // Mock validation
      if (email.toLowerCase() === 'user' && password === 'pass123') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userRole', 'postulante');
        navigate('/');
      } else {
        setErrorMsg('Credenciales incorrectas. (Pista: usa "user" / "pass123")');
      }
    }, 1200);
  };

  return (
    <div className="login-container">
      {/* Left Branding Panel */}
      <div className="login-left-panel">
        <div className="login-left-bg"></div>
        <div className="login-left-overlay"></div>
        <div className="login-left-content">
          <Link to="/">
            <img src="/logo.png" alt="EmpleosAqua" className="login-brand-logo" />
          </Link>
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${role}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="login-left-title">{content[role].leftTitle}</h1>
              <p className="login-left-text">
                {content[role].leftText}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="login-right-panel">
        <Link to="/" className="login-back-link">
          <ArrowLeft size={16} /> Volver
        </Link>

        <div className="login-form-wrapper">
          <div className="login-header mb-8">
            <h2>Portal Postulantes</h2>
            <p>Accede para gestionar tus postulaciones y currículum</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >

              {/* Modern Google Button */}
              <button type="button" className="btn-google">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Continuar con Google
              </button>

              <div className="login-divider">O ingresa con tu cuenta</div>

              {errorMsg && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }} 
                  className="mb-4 p-3 bg-red-50 border border-red-100 text-red-600 text-sm font-medium rounded-lg flex items-start gap-2"
                >
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  <span>{errorMsg}</span>
                </motion.div>
              )}

              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label className="form-label">Usuario o Correo</label>
                  <div className="form-input-wrapper">
                    <Mail size={18} className="form-icon" />
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder={role === 'postulante' ? 'user' : 'empresa'} 
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
                <span>{content[role].registerText}</span>
                <button 
                  type="button" 
                  onClick={() => setIsRegisterOpen(true)} 
                  className="register-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit', fontFamily: 'inherit' }}
                >
                  {content[role].registerLinkAction}
                </button>
              </div>
            </motion.div>
          </div>
      </div>

      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />
    </div>
  );
};

export default Login;
