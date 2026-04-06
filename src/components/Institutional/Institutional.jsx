import { motion } from 'framer-motion';
import './Institutional.css';
import { Target, MonitorPlay, FileCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Institutional = () => {
  return (
    <>
      {/* Premium Video Guide: Minimalist & High-end */}
      <section className="section-premium-guide container mx-auto mb-20 px-4">
        <div className="premium-guide-wrapper glass-panel">
          
          {/* Main Content Side: Assistant with Speech Bubble */}
          <div className="premium-assistant-side">
            <div className="premium-speech-bubble">
              <span className="premium-bubble-tag">AYUDA AQUA</span>
              <h3>¿Cómo navegar en el portal?</h3>
              <p>Revisa nuestro videotutorial rápido para facilitar tu navegación.</p>
              <Link to="/contacto" className="premium-contact-button no-underline">
                Contáctanos <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="premium-assistant-img-box">
              <img src="/asistente.png" alt="Assistant" className="premium-assistant-img" />
            </div>
          </div>

          {/* Video Side: Large, Clean, Immersive */}
          <div className="premium-video-side">
            <div className="premium-video-frame">
              <iframe 
                src="https://www.youtube.com/embed/eKhv-F2EwTU?showinfo=0&rel=0&modestbranding=1" 
                title="Tutorial Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="premium-iframe"
              ></iframe>
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
