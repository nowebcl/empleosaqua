import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Target } from 'lucide-react';
import './ValueBlock.css';

const ValueBlock = () => {
  return (
    <section id="empresas" className="val-section">
      <div className="val-bg-glow"></div>
      <div className="container val-container">
        
        {/* Postulantes */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="val-block val-postulantes glass-panel relative overflow-hidden"
        >
          <div className="val-deco deco-cyan"></div>
          <div className="val-content">
            <h2 className="text-3xl mb-4 font-bold">Impulsa tu <span className="text-gradient">Carrera</span></h2>
            <p className="text-muted mb-8 text-lg">Únete a la principal red de profesionales del sector acuícola y marítimo. Accede a herramientas diseñadas para destacarte.</p>
            
            <ul className="val-list">
              <li><CheckCircle2 size={20} className="val-icon text-cyan" /> <span>Visibilidad directa con empresas líderes del rubro.</span></li>
              <li><CheckCircle2 size={20} className="val-icon text-cyan" /> <span>Perfil digital especializado y optimizado.</span></li>
              <li><CheckCircle2 size={20} className="val-icon text-cyan" /> <span>Alertas de empleo personalizadas.</span></li>
            </ul>

            <button className="btn btn-primary mt-8">Crear Mi Currículum</button>
          </div>
        </motion.div>

        {/* Empresas */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="val-block val-empresas glass-panel relative overflow-hidden"
        >
          <div className="val-deco deco-gold"></div>
          <div className="val-content">
            <h2 className="text-3xl mb-4 font-bold">Encuentra <span className="text-gold">Talento</span></h2>
            <p className="text-muted mb-8 text-lg">Digitaliza y optimiza tu proceso de selección con nuestra plataforma completa de gestión de candidatos.</p>
            
            <ul className="val-list">
              <li><CheckCircle2 size={20} className="val-icon text-gold" /> <span>Acceso a la mayor base de currículums certificados del sector.</span></li>
              <li><CheckCircle2 size={20} className="val-icon text-gold" /> <span>Filtros avanzados y tecnología de compatibilidad.</span></li>
              <li><CheckCircle2 size={20} className="val-icon text-gold" /> <span>Dashboard de gestión de procesos intuitivo.</span></li>
            </ul>

            <button className="btn btn-secondary mt-8 border-gold text-gold-hover">Publicar Nueva Oferta</button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ValueBlock;
