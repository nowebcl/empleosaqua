import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          
          {/* Column 1: Brand */}
          <div className="footer-col brand-col">
            <div className="footer-logo mb-4">
              <img src="/logo.png" alt="EmpleosAqua Logo" className="logo-icon-footer-img" />
            </div>
            <div className="b2b-logo mb-6">
               {/* Simulating the B2B logo from image */}
               <div className="text-white font-black text-4xl leading-none">B2B</div>
               <div className="text-white text-xs tracking-[0.2em] font-bold">MEDIA GROUP</div>
            </div>
            <div className="social-links flex gap-4">
              <a href="https://www.linkedin.com/company/empleosaqua/" target="_blank" rel="noreferrer" className="social-icon"><Linkedin size={20}/></a>
              <a href="https://www.facebook.com/Empleosaqua" target="_blank" rel="noreferrer" className="social-icon"><Facebook size={20}/></a>
              <a href="https://www.instagram.com/empleosaqua/" target="_blank" rel="noreferrer" className="social-icon"><Instagram size={20}/></a>
            </div>
          </div>

          {/* Column 2: Postulantes */}
          <div className="footer-col">
            <h4 className="footer-title">Soy Postulante</h4>
            <ul className="footer-links">
              <li><Link to="/#buscar">Buscar Empleos</Link></li>
              <li><Link to="/login/postulante">Crear Currículum</Link></li>
              <li><Link to="/#buscar">Ofertas Destacadas</Link></li>
              <li><Link to="/#buscar">Ofertas Inclusivas</Link></li>
              <li><Link to="/#buscar">Prácticas Profesionales</Link></li>
            </ul>
          </div>

          {/* Column 3: Empresas */}
          <div className="footer-col">
            <h4 className="footer-title">Soy Empresa</h4>
            <ul className="footer-links">
              <li><Link to="/login/empresa">Publicar Oferta</Link></li>
              <li><Link to="/tarifas">Tarifas</Link></li>
              <li><Link to="/espacios-publicitarios">Espacios Publicitarios</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Info */}
          <div className="footer-col">
            <h4 className="footer-title">Contáctanos</h4>
            <div className="footer-contact">
              <div className="contact-item flex items-center gap-2 mb-3 whitespace-nowrap">
                <Mail size={18}/> 
                <span>
                  empleosaqua@b2bmg.cl
                </span>
              </div>
              <div className="contact-item flex items-center gap-2 mb-3 whitespace-nowrap">
                <Phone size={18}/> (56-65) 247 0107
              </div>
              <div className="contact-item flex items-center gap-2">
                <MapPin size={18} className="shrink-0"/> <span>Puerto Montt, Región de Los Lagos.</span>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="copyright-text">© {new Date().getFullYear()} EmpleosAqua. Una plataforma de B2B Media Group. Todos los derechos reservados.</p>
          <div className="legal-links flex gap-6 mt-4 md:mt-0">
            <a href="#">Términos y Condiciones</a>
            <a href="#">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
