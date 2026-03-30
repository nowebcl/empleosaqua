import React, { useState, useEffect } from 'react';
import { Menu, X, UserCircle, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        
        <div className="header-logo">
          <Link to="/">
            <img src="/logo.png" alt="EmpleosAqua Logo" className="logo-icon-img" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-only flex-1 justify-center">
          <Link to="/nosotros" className="nav-link">Nosotros</Link>
          <Link to="/info-laboral" className="nav-link">Info Laboral</Link>
          <div className="divider hidden lg:block mx-1"></div>
          <Link to="/publicar-oferta" className="nav-link font-medium">Publicar Oferta</Link>
          <Link to="/tarifas" className="nav-link">Tarifas</Link>
          <Link to="/espacios-publicitarios" className="nav-link">Publicidad</Link>
          <div className="divider hidden lg:block mx-1"></div>
          <Link to="/preguntas-frecuentes" className="nav-link">FAQ</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions desktop-only">
          <Link to="/login" className="btn btn-outline btn-sm no-underline flex items-center gap-2">
            <UserCircle size={18} />
            <span>Postulantes</span>
          </Link>
          <Link to="/dashboard/empresa" className="btn btn-primary btn-sm btn-glow no-underline flex items-center gap-2">
            <Building2 size={18} />
            <span>Empresas</span>
          </Link>
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
            <Link to="/nosotros" className="mobile-link">Nosotros</Link>
            <Link to="/info-laboral" className="mobile-link">Info Laboral</Link>
            <Link to="/publicar-oferta" className="mobile-link">Publicar Oferta</Link>
            <Link to="/tarifas" className="mobile-link">Tarifas</Link>
            <Link to="/espacios-publicitarios" className="mobile-link">Publicidad</Link>
            <Link to="/preguntas-frecuentes" className="mobile-link">FAQ</Link>
            <Link to="/contacto" className="mobile-link">Contacto</Link>
          </nav>
          <div className="mobile-actions">
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="btn btn-outline w-full mb-3 text-center justify-center no-underline">
              Postulantes
            </Link>
            <Link to="/dashboard/empresa" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary w-full text-center justify-center no-underline">
              Empresas
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
