import React from 'react';
import { motion } from 'framer-motion';
import './Institutional.css';
import { Target, MonitorPlay, FileCheck, ArrowUpRight } from 'lucide-react';

const Institutional = () => {
  const animatedText = "Promocionar tus servicios en nuestro portal laboral.".split(" ");

  return (
    <>
      {/* Commercial Banner */}
      <section id="tarifas" className="commercial-banner container mx-auto my-8">
        <div className="banner-content glass-panel banner-animated-bg">
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

      {/* Trust Block */}
      <section className="trust-section overflow-hidden">
        <div className="container mx-auto">
          <p className="text-center text-3xl text-black font-bold tracking-widest mb-10">NUESTRAS MARCAS</p>
          <div className="trust-marquee-container">
            <div className="trust-logos-track">
              {/* Set 1 */}
              <img src="/Logotipo B2B (1).jpg" alt="B2B Media Group" className="trust-logo-img" />
              <img src="/Logotipo Aqua.jpg" alt="AQUA Acuicultura+Pesca" className="trust-logo-img" />
              <img src="/Logotipo AquaForum Los Lagos.png" alt="AquaForum Los Lagos" className="trust-logo-img" />
              <img src="/Logotipo AquaForum Patagonia.png" alt="AquaForum Patagonia" className="trust-logo-img" />
              <img src="/Logotipo AquaForum Aysén.png" alt="AquaForum Aysén" className="trust-logo-img" style={{ height: '110px' }} />

              {/* Set 2 (Duplicate for infinite loop) */}
              <img src="/Logotipo B2B (1).jpg" alt="B2B Media Group" className="trust-logo-img" />
              <img src="/Logotipo Aqua.jpg" alt="AQUA Acuicultura+Pesca" className="trust-logo-img" />
              <img src="/Logotipo AquaForum Los Lagos.png" alt="AquaForum Los Lagos" className="trust-logo-img" />
              <img src="/Logotipo AquaForum Patagonia.png" alt="AquaForum Patagonia" className="trust-logo-img" />
              <img src="/Logotipo AquaForum Aysén.png" alt="AquaForum Aysén" className="trust-logo-img" style={{ height: '110px' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Institutional;
