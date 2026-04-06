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
            <div className="youtube-video-widget group">
              {/* Custom Thumbnail Overlay (High-end feel) */}
              <div className="video-thumbnail-overlay">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200" 
                  alt="Tutorial Preview" 
                  className="widget-thumbnail-img"
                />
                <div className="widget-glass-overlay"></div>
                <div className="widget-play-container">
                  <div className="play-button-premium">
                    <MonitorPlay size={44} fill="white" className="ml-1" />
                  </div>
                </div>
                <div className="widget-footer-info">
                  <span className="text-white font-bold text-sm tracking-wide">VIDEO: CÓMO NAVEGAR EN EL PORTAL</span>
                </div>
              </div>

              {/* Real Iframe behind */}
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/eKhv-F2EwTU" 
                title="Tutorial EmpleosAqua" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="video-iframe-element"
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
