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
          
          {/* Left Column: Assistant & Speech Bubble (Strict Horizontal) */}
          <div className="flex flex-row items-center justify-center gap-4 relative z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="speech-bubble-ref mb-2 animate-bounce-subtle">
                <p>Revisa el video de nuestra página para facilitar tu navegación</p>
                <div className="speech-arrow-ref"></div>
              </div>
              <Link to="/contacto" className="btn-contact-ref no-underline">
                CONTÁCTANOS
              </Link>
            </div>
            
            <div className="assistant-wrapper-ref">
              <img 
                src="/asistente.png" 
                alt="Asistente Virtual" 
                className="assistant-img-ref"
              />
            </div>
          </div>

          {/* Right Column: YouTube Video */}
          <div className="video-container-wrapper relative z-10">
            <div className="youtube-video-frame group shadow-2xl">
              <div className="video-glow"></div>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Tutorial EmpleosAqua" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="rounded-[1.5rem]"
              ></iframe>
              <div className="video-footer-tag">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#005f99] flex items-center justify-center">
                    <img src="/logo.png" alt="Logo" className="w-4 h-auto brightness-0 invert" />
                  </div>
                  <span className="text-white text-xs font-bold uppercase tracking-wider">Tutorial de Navegación</span>
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
