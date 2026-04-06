import { motion } from 'framer-motion';
import './Institutional.css';
import { Target, MonitorPlay, FileCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Institutional = () => {
  const animatedText = "Promocionar tus servicios en nuestro portal laboral.".split(" ");

  return (
    <>
      {/* Commercial Banner */}
      <section id="tarifas" className="commercial-banner container mx-auto my-4">
        <div className="banner-content glass-panel banner-animated-bg py-8">
          <div className="banner-bg-shimmer"></div>
          <div className="banner-info text-center w-full flex flex-col items-center">
            <button className="btn btn-outline bg-white text-cyan-600 hover:bg-cyan-50 font-bold border-none px-8 py-3 rounded-full shadow-lg mb-6">Espacio Publicitario</button>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 flex flex-wrap justify-center gap-2" style={{ maxWidth: '800px', lineHeight: '1.4' }}>
              {animatedText.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: animatedText.length * 0.1 }}
              className="text-muted mb-4 text-lg" style={{ maxWidth: '700px' }}
            >
              ¡Date a conocer en el sector acuícola y otros rubros productivos de la región de Los Lagos!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Guide Section: Assistant + Video */}
      <section className="guide-section container mx-auto my-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-slate-100 overflow-hidden relative">
          <div className="guide-bg-decoration"></div>
          
          {/* Left Column: Assistant & Speech Bubble */}
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="relative group">
              <div className="speech-bubble mb-4 md:mb-0 md:absolute md:-top-24 md:-left-4 animate-bounce-subtle">
                <p>Revisa el video de nuestra página para facilitar tu navegación</p>
                <div className="speech-arrow"></div>
              </div>
              <Link to="/contacto" className="btn-contact-floating no-underline hidden md:flex">
                CONTÁCTANOS
              </Link>
            </div>
            <div className="assistant-wrapper">
              <img 
                src="/asistente.png" 
                alt="Asistente Virtual" 
                className="assistant-img"
              />
              <Link to="/contacto" className="btn-contact-floating no-underline md:hidden mt-4 w-full justify-center">
                CONTÁCTANOS
              </Link>
            </div>
          </div>

          {/* Right Column: Video Container */}
          <div className="video-container-wrapper relative z-10">
            <div className="video-mockup-frame group">
              <div className="video-overlay-gradient"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000" 
                alt="Video Thumbnail" 
                className="video-thumbnail"
              />
              <div className="play-button-outer">
                <div className="play-button-inner">
                  <MonitorPlay size={48} className="text-white ml-1" />
                </div>
              </div>
              <div className="video-footer-info">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <img src="/logo.png" alt="Icon" className="w-5 h-auto brightness-0 invert" />
                  </div>
                  <span className="text-white font-medium text-sm">Videotutorial: Cómo navegar en EmpleosAqua</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="trust-section overflow-hidden py-12">
        <div className="container mx-auto">
          <p className="text-center text-4xl lg:text-5xl text-black font-extrabold tracking-widest mb-12">NUESTRAS MARCAS</p>
          <div className="trust-marquee-container">
            <div className="trust-logos-track">
              {/* Set 1 */}
              <img src="/Logotipo B2B (1).jpg" alt="B2B Media Group" className="trust-logo-img" />
              <img src="/Logotipo Aqua.jpg" alt="AQUA Acuicultura+Pesca" className="trust-logo-img" />
              <img src="/Logotipo AquaForum Los Lagos.png" alt="AquaForum Los Lagos" className="trust-logo-img" />
              <img src="/Logotipo AquaForum Patagonia.png" alt="AquaForum Patagonia" className="trust-logo-img" />
              <img src="/Logotipo AquaForum Aysén.png" alt="AquaForum Aysén" className="trust-logo-img" style={{ height: '140px', maxWidth: '280px' }} />

              {/* Set 2 (Duplicate for infinite loop) */}
              <img src="/Logotipo B2B (1).jpg" alt="B2B Media Group" className="trust-logo-img" />
              <img src="/Logotipo Aqua.jpg" alt="AQUA Acuicultura+Pesca" className="trust-logo-img" />
              <img src="/Logotipo AquaForum Los Lagos.png" alt="AquaForum Los Lagos" className="trust-logo-img" />
              <img src="/Logotipo AquaForum Patagonia.png" alt="AquaForum Patagonia" className="trust-logo-img" />
              <img src="/Logotipo AquaForum Aysén.png" alt="AquaForum Aysén" className="trust-logo-img" style={{ height: '140px', maxWidth: '280px' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Institutional;
