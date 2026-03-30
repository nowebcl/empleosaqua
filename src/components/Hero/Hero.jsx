import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Briefcase } from 'lucide-react';
import './Hero.css';

import img1 from '../../assets/hero1.png';
import img2 from '../../assets/hero2.png';
import img3 from '../../assets/hero3.png';

const heroImages = [img1, img2, img3];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000); // 6 segundos de intervalo para disfrutar la animación lenta
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section w-full relative">
      {/* Background carousel */}
      <div className="hero-carousel-container absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImage}
            src={heroImages[currentImage]}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{ 
              opacity: { duration: 1.5 },
              scale: { duration: 8, ease: "linear" } 
            }}
            className="hero-video-bg w-full h-full object-cover absolute inset-0 origin-center"
            alt="Hero background"
          />
        </AnimatePresence>
      </div>
      
      {/* Background image/video overlay */}
      <div className="hero-bg-overlay"></div>

      <div className="absolute inset-0 z-10 w-full flex items-center justify-center pointer-events-none px-4">
        <div className="hero-content w-full flex flex-col items-center justify-center text-center max-w-[900px] pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="badge badge-new mb-4 shimmer inline-flex mx-auto"
          >
            <span>La nueva generación de empleo acuícola</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="hero-title w-full text-center"
          >
            Conectamos tu empresa con el<br/>
            <span className="text-gradient drop-shadow-lg">talento que necesitas</span>
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
