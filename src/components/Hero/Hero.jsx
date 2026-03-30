import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Briefcase } from 'lucide-react';
import './Hero.css';

const heroImages = [
  '/acuicultura_hero_bg.png', // Assuming this is one of them or fallback
  '/acuicultura_hero_bg.png', // User should replace with actual images
  '/acuicultura_hero_bg.png'  // User should replace with actual images
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      {/* Background carousel */}
      <div className="hero-carousel-container absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImage}
            src={heroImages[currentImage]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="hero-video-bg w-full h-full object-cover absolute inset-0"
            alt="Hero background"
          />
        </AnimatePresence>
      </div>
      
      {/* Background image/video overlay */}
      <div className="hero-bg-overlay"></div>

      <div className="container hero-container relative z-10">
        <div className="hero-content mx-auto text-center" style={{ maxWidth: '800px', width: '100%' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="badge badge-new mb-4 shimmer inline-flex mx-auto"
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
            className="hero-subtitle mb-6 mx-auto"
          >
            Plataforma líder orientada a perfiles operativos, técnicos y profesionales vinculados a la salmonicultura, pesca, logística, transporte marítimo y servicios industriales.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-search-bar glass-panel mt-8 mx-auto justify-center search-bar-centered"
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
            <button className="btn btn-primary search-btn" onClick={() => {
              const el = document.getElementById('buscar');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Search size={20} /> <span className="search-btn-text">Buscar</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
