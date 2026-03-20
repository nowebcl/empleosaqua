import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase, Building2, Search, UserCircle, Bell } from 'lucide-react';
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
        <nav className="header-nav desktop-only">
          <a href="#buscar" className="nav-link">Buscar Empleo</a>
          <a href="#empresas" className="nav-link">Para Empresas</a>
          <a href="#info" className="nav-link">Info Laboral</a>
          <a href="#tarifas" className="nav-link">Tarifas</a>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions desktop-only">
          <Link to="/login" className="btn btn-outline btn-sm no-underline flex items-center gap-2">
            <UserCircle size={18} />
            <span>Ingresar</span>
          </Link>
          <div className="divider"></div>
          <button className="btn btn-primary btn-sm btn-glow">
            <Building2 size={18} />
            <span>Soy Empresa</span>
          </button>
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
            <a href="#buscar" className="mobile-link"><Search size={20}/> Buscar Empleo</a>
            <a href="#empresas" className="mobile-link"><Building2 size={20}/> Para Empresas</a>
            <a href="#info" className="mobile-link"><Briefcase size={20}/> Info Laboral</a>
            <a href="#tarifas" className="mobile-link"><Building2 size={20}/> Tarifas</a>
          </nav>
          <div className="mobile-actions">
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="btn btn-outline w-full mb-3 text-center justify-center no-underline">Ingresar</Link>
            <button className="btn btn-primary w-full text-center justify-center">Soy Empresa</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
