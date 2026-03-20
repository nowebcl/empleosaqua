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
              <img src="/logo.png" alt="EmpleosAqua Logo" className="logo-icon-small-img" />
            </div>
            <p className="text-muted text-sm mb-6">Plataforma digital líder para el rubro acuícola y marítimo. Conectando talento con las mejores empresas de la industria desde 2010.</p>
            <div className="social-links flex gap-4">
              <a href="#" className="social-icon"><Linkedin size={20}/></a>
              <a href="#" className="social-icon"><Facebook size={20}/></a>
              <a href="#" className="social-icon"><Twitter size={20}/></a>
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
              <li><a href="#">Buscar Candidatos</a></li>
              <li><a href="#">Tarifas y Planes</a></li>
              <li><a href="#">Espacios Publicitarios</a></li>
              <li><a href="#">Acceso Empresa</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Info */}
          <div className="footer-col">
            <h4 className="footer-title">Plataforma</h4>
            <ul className="footer-links mb-6">
              <li><a href="#">Quiénes Somos</a></li>
              <li><a href="#">Hub de Información</a></li>
              <li><a href="#">Preguntas Frecuentes</a></li>
            </ul>
            <div className="footer-contact text-sm text-muted">
              <div className="contact-item flex items-center gap-2 mb-2"><Mail size={16}/> soporte@empleosaqua.cl</div>
              <div className="contact-item flex items-center gap-2 mb-2"><Phone size={16}/> +56 2 2947 5000</div>
              <div className="contact-item flex items-center gap-2"><MapPin size={16}/> Puerto Montt, Región de Los Lagos</div>
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
