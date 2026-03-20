import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase, ChevronRight, Building2, Users } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background elements */}
      <div className="hero-bg-glow"></div>
      <div className="hero-grid"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="badge badge-new mb-6 shimmer inline-flex mx-auto lg:mx-0"
          >
            <span>La nueva generación de empleo acuícola</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-title"
          >
            Conectamos el talento con la <br/>
            <span className="text-gradient">industria acuícola</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle mb-8"
          >
            La plataforma líder digitalizada para profesionales, técnicos y empresas del rubro acuícola y marítimo en Chile y el mundo.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-pathways"
          >
            {/* Camino Postulante */}
            <div className="pathway-card glass-panel shimmer">
              <div className="pathway-icon">
                <Users size={28} color="var(--color-secondary)" />
              </div>
              <div className="pathway-info">
                <h3>Soy Postulante</h3>
                <p>Encuentra tu próximo desafío laboral</p>
              </div>
              <button className="btn btn-primary pathway-btn w-full mt-4">
                Buscar Empleos <ChevronRight size={18} />
              </button>
            </div>

            {/* Camino Empresa */}
            <div className="pathway-card glass-panel shimmer">
              <div className="pathway-icon">
                <Building2 size={28} color="#FFD700" />
              </div>
              <div className="pathway-info">
                <h3>Soy Empresa</h3>
                <p>Publica ofertas y encuentra talento</p>
              </div>
              <button className="btn btn-secondary pathway-btn w-full mt-4">
                Publicar Oferta <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-search-bar glass-panel mt-12"
          >
            <div className="search-input-group">
              <Briefcase size={20} className="search-icon" />
              <input type="text" placeholder="Cargo, palabra clave o empresa..." className="search-input" />
            </div>
            <div className="search-divider"></div>
            <div className="search-input-group">
              <MapPin size={20} className="search-icon" />
              <input type="text" placeholder="Región o ciudad..." className="search-input" />
            </div>
            <button className="btn btn-primary search-btn">
              <Search size={20} /> <span className="search-btn-text">Buscar</span>
            </button>
          </motion.div>
        </div>

        {/* Visual Decoration for Desktop */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-visual"
        >
          <div className="visual-graphic animate-float">
            <div className="graphic-circle"></div>
            <div className="graphic-circle inner"></div>
            
            {/* Floating Job Cards */}
            <div className="floating-card pos-1 glass-panel">
              <div className="fc-icon bg-blue"><Briefcase size={16} color="#fff"/></div>
              <div>
                <div className="fc-title">Jefe de Centro</div>
                <div className="fc-subtitle">Puerto Montt</div>
              </div>
            </div>
            
            <div className="floating-card pos-2 glass-panel animate-float-slow">
              <div className="fc-icon bg-green"><Building2 size={16} color="#fff"/></div>
              <div>
                <div className="fc-title">Nuevo Candidato Match</div>
                <div className="fc-subtitle">98% Compatibilidad</div>
              </div>
            </div>

            <div className="floating-card pos-3 glass-panel">
              <div className="fc-icon bg-purple"><Users size={16} color="#fff"/></div>
              <div>
                <div className="fc-title">+12 Postulaciones</div>
                <div className="fc-subtitle">Operario Planta</div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
