import { motion } from 'framer-motion';
import './Institutional.css';
import { Target, MonitorPlay, FileCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Institutional = () => {
  return (
    <>
      {/* Horizontal Guide: All in one row */}
      <section className="section-guide-horizontal container mx-auto mb-16 px-4">
        <div className="guide-row-container shadow-2xl glass-panel">
          
          {/* Left Part: Speech + Assistant */}
          <div className="assistant-column-flex">
            <div className="bubble-group-flex">
              <div className="speech-bubble-ref mb-3">
                <p>Revisa el video de nuestra página para facilitar tu navegación</p>
                <div className="speech-arrow-ref"></div>
              </div>
              <Link to="/contacto" className="btn-contact-ref no-underline">
                CONTÁCTANOS
              </Link>
            </div>
            <div className="assistant-img-container">
              <img 
                src="/asistente.png" 
                alt="Asistente Virtual" 
                className="assistant-img-ref"
              />
            </div>
          </div>

          {/* Right Part: Video */}
          <div className="video-column-flex">
            <div className="youtube-video-frame">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Tutorial EmpleosAqua" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="video-iframe"
              ></iframe>
              <div className="video-footer-tag">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#005f99] flex items-center justify-center">
                    <img src="/logo.png" alt="Logo" className="w-3 h-auto brightness-0 invert" />
                  </div>
                  <span className="text-white text-[10px] font-bold uppercase tracking-wider">Centro de ayuda</span>
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
