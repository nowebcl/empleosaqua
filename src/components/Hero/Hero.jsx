import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section hero-with-image">
      {/* Background image overlay */}
      <div className="hero-bg-overlay"></div>

      <div className="container hero-container relative z-10">
        <div className="hero-content mx-auto text-center" style={{ maxWidth: '800px', width: '100%' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="badge badge-new mb-6 shimmer inline-flex mx-auto"
          >
            <span>La nueva generación de empleo acuícola</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-title"
          >
            Conectamos tu empresa con el <br/>
            <span className="text-gradient">talento que necesitas</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle mb-8 mx-auto"
          >
            Plataforma líder orientada a perfiles técnicos, operativos y profesionales vinculados a la salmonicultura, pesca, logística, plantas de proceso, transporte marítimo y servicios industriales.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-search-bar glass-panel mt-12 mx-auto justify-center search-bar-centered"
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
      </div>
    </section>
  );
};

export default Hero;
