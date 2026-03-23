import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          
          {/* Column 1: Brand */}
          <div className="footer-col brand-col">
            <div className="footer-logo mb-6">
              <img src="/logo.png" alt="EmpleosAqua Logo" className="logo-icon-footer-img" />
            </div>
            <div className="social-links flex gap-4">
              <a href="#" className="social-icon"><Linkedin size={20}/></a>
              <a href="#" className="social-icon"><Facebook size={20}/></a>
              <a href="#" className="social-icon"><Instagram size={20}/></a>
            </div>
          </div>

          {/* Column 2: Postulantes */}
          <div className="footer-col">
            <h4 className="footer-title">Soy Postulante</h4>
            <ul className="footer-links">
              <li><a href="#">Buscar Empleos</a></li>
              <li><a href="#">Crear Currículum</a></li>
              <li><a href="#">Ofertas Destacadas</a></li>
              <li><a href="#">Ofertas Inclusivas</a></li>
              <li><a href="#">Prácticas Profesionales</a></li>
            </ul>
          </div>

          {/* Column 3: Empresas */}
          <div className="footer-col">
            <h4 className="footer-title">Soy Empresa</h4>
            <ul className="footer-links">
              <li><a href="#">Publicar Oferta</a></li>
              <li><a href="#">Planes y tarifas</a></li>
              <li><a href="#">Espacios Publicitarios</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Info */}
          <div className="footer-col">
            <h4 className="footer-title">Contáctanos</h4>
            <div className="footer-contact text-sm text-muted">
              <div className="contact-item flex items-center gap-2 mb-3">
                <Mail size={16}/> 
                <span>
                  empleosaqua<br/>
                  b2bmg.cl
                </span>
              </div>
              <div className="contact-item flex items-center gap-2 mb-3">
                <Phone size={16}/> (56-65) 247 0107
              </div>
              <div className="contact-item flex items-center gap-2">
                <MapPin size={16}/> Puerto Montt, Región de Los Lagos.
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="text-sm text-muted">© {new Date().getFullYear()} EmpleosAqua. Una plataforma de B2B Media Group. Todos los derechos reservados.</p>
          <div className="legal-links text-sm flex gap-4 text-muted mt-4 md:mt-0">
            <a href="#">Términos y Condiciones</a>
            <a href="#">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
