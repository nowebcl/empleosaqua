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
          <Link to="/publicar-oferta" className="nav-link font-medium">Publicar Oferta</Link>
          <Link to="/tarifas" className="nav-link">Tarifas</Link>
          <Link to="/espacios-publicitarios" className="nav-link">Espacios Publicitarios</Link>
          <Link to="/nosotros" className="nav-link">Nosotros</Link>
          <Link to="/info-laboral" className="nav-link">Info Laboral</Link>
          <Link to="/preguntas-frecuentes" className="nav-link">Preguntas Frecuentes</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </nav>

        {/* Action Buttons - Enmarcado en un contenedor resaltado */}
        <div className="header-actions desktop-only bg-black/10 backdrop-blur-sm p-1.5 rounded-full border border-white/20 shadow-inner">
          <Link to="/login" className="btn btn-outline btn-sm no-underline flex items-center gap-2 rounded-full border-none bg-white text-black hover:bg-gray-100">
            <UserCircle size={18} />
            <span className="font-bold">Postulantes</span>
          </Link>
          <Link to="/dashboard/empresa" className="btn btn-primary btn-sm btn-glow no-underline flex items-center gap-2 rounded-full border-none shadow-md bg-[#005f99] hover:bg-[#004a77] text-white">
            <Building2 size={18} />
            <span className="font-bold">Empresas</span>
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
            <Link to="/publicar-oferta" className="mobile-link text-black font-semibold">Publicar Oferta</Link>
            <Link to="/tarifas" className="mobile-link text-black font-semibold">Tarifas</Link>
            <Link to="/espacios-publicitarios" className="mobile-link text-black font-semibold">Espacios Publicitarios</Link>
            <Link to="/nosotros" className="mobile-link text-black font-semibold">Nosotros</Link>
            <Link to="/info-laboral" className="mobile-link text-black font-semibold">Info Laboral</Link>
            <Link to="/preguntas-frecuentes" className="mobile-link text-black font-semibold">Preguntas Frecuentes</Link>
            <Link to="/contacto" className="mobile-link text-black font-semibold">Contacto</Link>
          </nav>
          <div className="mobile-actions bg-gray-100 p-2 rounded-xl">
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="btn btn-outline w-full mb-3 text-center justify-center no-underline border-none bg-white text-black shadow-sm font-bold">
              Postulantes
            </Link>
            <Link to="/dashboard/empresa" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary w-full text-center justify-center no-underline border-none shadow-md font-bold">
              Empresas
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
