import React from 'react';
import './Institutional.css';
import { Target, MonitorPlay, FileCheck, ArrowUpRight } from 'lucide-react';

const Institutional = () => {
  return (
    <>
      {/* Commercial Banner */}
      <section id="tarifas" className="commercial-banner container mx-auto my-8">
        <div className="banner-content glass-panel banner-animated-bg">
          <div className="banner-bg-shimmer"></div>
          <div className="banner-info text-center w-full flex flex-col items-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ maxWidth: '800px', lineHeight: '1.4' }}>
              Te brindamos la oportunidad de promocionar tus servicios en nuestro portal laboral.
            </h2>
            <p className="text-muted mb-8 text-lg" style={{ maxWidth: '700px' }}>
              Aprovecha la posibilidad de darte a conocer en el sector acuícola y otros rubros productivos de la región de Los Lagos.
            </p>
            <button className="btn btn-outline bg-white text-cyan-600 hover:bg-cyan-50 font-bold border-none px-8 py-3 rounded-full shadow-lg">Espacios Publicitarios</button>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="trust-section">
        <div className="container mx-auto">
          <p className="text-center text-sm text-muted font-bold tracking-widest mb-10">NUESTRAS MARCAS</p>
          <div className="trust-logos">
            <img src="/Logotipo B2B (1).jpg" alt="B2B Media Group" className="trust-logo-img" />
            <img src="/Logotipo Aqua.jpg" alt="AQUA Acuicultura+Pesca" className="trust-logo-img" />
            <img src="/Logotipo AquaForum Los Lagos.png" alt="AquaForum Los Lagos" className="trust-logo-img" />
            <img src="/Logotipo AquaForum Patagonia.png" alt="AquaForum Patagonia" className="trust-logo-img" />
            <img src="/Logotipo AquaForum Aysén.png" alt="AquaForum Aysén" className="trust-logo-img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Institutional;
