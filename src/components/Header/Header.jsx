import React, { useState, useEffect } from 'react';
import { Menu, X, UserCircle, Building2, LogOut, ChevronDown, LayoutDashboard } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
    setUserRole(localStorage.getItem('userRole'));
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    setIsAuthenticated(false);
    setUserRole(null);
    setUserMenuOpen(false);
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''} ${!isHomePage ? 'header-page' : ''}`}>
      <div className="container header-container">
        
        <div className="header-logo">
          <Link to="/">
            <img src="/logo.png" alt="EmpleosAqua Logo" className="logo-icon-img" />
          </Link>
        </div>

        {/* Desktop Navigation */}
          <nav className="header-nav desktop-only flex-1 justify-center">
          <Link to="/login/empresa" className="nav-link font-medium">Publicar Oferta</Link>
          <div className="divider"></div>
          <a href="/MediaKit%202026.pdf" target="_blank" rel="noopener noreferrer" className="nav-link font-medium">Tarifas</a>
          <div className="divider"></div>
          <a href="/MediaKit%202026.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">Espacios Publicitarios</a>
          <div className="divider"></div>
          <Link to="/nosotros" className="nav-link">Nosotros</Link>
          <div className="divider"></div>
          <Link to="/info-laboral" className="nav-link">Info Laboral</Link>
          <div className="divider"></div>
          <Link to="/preguntas-frecuentes" className="nav-link">Preguntas Frecuentes</Link>
          <div className="divider"></div>
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </nav>

        {/* Action Buttons - Enmarcado en un contenedor resaltado */}
        <div className="header-actions desktop-only relative">
          {isAuthenticated && userRole === 'postulante' ? (
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="user-menu-trigger"
              >
                <UserCircle size={20} />
                <span>Mi Cuenta</span>
                <ChevronDown size={16} />
              </button>

              {userMenuOpen && (
                <div className="user-menu-dropdown-surface">
                  <div className="user-menu-header">
                    <p className="user-menu-name">Frainibel S.</p>
                    <p className="user-menu-role">Postulante</p>
                  </div>
                  <Link to="/dashboard/postulante" onClick={() => setUserMenuOpen(false)} className="user-menu-surface-item">
                    <LayoutDashboard size={16} />
                    Mi Panel / CV
                  </Link>
                  <button onClick={handleLogout} className="user-menu-surface-item danger">
                    <LogOut size={16} />
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-full border border-white/40 shadow-xl flex gap-2">
              <Link to="/login/postulante" className="btn btn-outline btn-sm btn-postulante no-underline flex items-center gap-2 rounded-full border-none font-bold">
                <UserCircle size={18} />
                <span>Postulantes</span>
              </Link>
              <Link to="/login/empresa" className="btn btn-primary btn-sm btn-glow no-underline flex items-center gap-2 rounded-full border-none shadow-md bg-[#005f99] hover:bg-[#004a77] text-white">
                <Building2 size={18} />
                <span className="font-bold">Empresas</span>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <Link to="/login/empresa" className="mobile-link text-black font-semibold">Publicar Oferta</Link>
            <a href="/MediaKit%202026.pdf" target="_blank" rel="noopener noreferrer" className="mobile-link text-black font-semibold">Tarifas</a>
            <a href="/MediaKit%202026.pdf" target="_blank" rel="noopener noreferrer" className="mobile-link text-black font-semibold">Espacios Publicitarios</a>
            <Link to="/nosotros" className="mobile-link text-black font-semibold">Nosotros</Link>
            <Link to="/info-laboral" className="mobile-link text-black font-semibold">Info Laboral</Link>
            <Link to="/preguntas-frecuentes" className="mobile-link text-black font-semibold">Preguntas Frecuentes</Link>
            <Link to="/contacto" className="mobile-link text-black font-semibold">Contacto</Link>
          </nav>
          <div className="mobile-actions bg-gray-100 p-2 rounded-xl">
            {isAuthenticated && userRole === 'postulante' ? (
              <div className="flex flex-col gap-2">
                <Link to="/dashboard/postulante" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary w-full text-center justify-center no-underline border-none shadow-md font-bold flex items-center gap-2">
                  <LayoutDashboard size={18} /> Ir a mi Panel
                </Link>
                <button onClick={handleLogout} className="btn w-full text-center justify-center border-none shadow-sm font-bold text-red-600 bg-white flex items-center gap-2">
                  <LogOut size={18} /> Cerrar Sesión
                </button>
              </div>
            ) : (
              <>
                <Link to="/login/postulante" onClick={() => setMobileMenuOpen(false)} className="btn btn-outline w-full mb-3 text-center justify-center no-underline border-none bg-white text-black shadow-sm font-bold">
                  Postulantes
                </Link>
                <Link to="/login/empresa" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary w-full text-center justify-center no-underline border-none shadow-md font-bold">
                  Empresas
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
