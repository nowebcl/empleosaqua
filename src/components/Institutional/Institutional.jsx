import React from 'react';
import './Institutional.css';
import { Target, MonitorPlay, FileCheck, ArrowUpRight } from 'lucide-react';

const Institutional = () => {
  return (
    <>
      {/* Commercial Banner */}
      <section id="tarifas" className="commercial-banner container">
        <div className="banner-content glass-panel">
          <div className="banner-bg-shimmer"></div>
          <div className="banner-info">
            <span className="badge badge-featured mb-2">Para Empresas</span>
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">Potencia tu Visibilidad</h2>
            <p className="text-muted mb-6">Accede a nuestros planes premium y espacios de branding corporativo.</p>
            <div className="banner-stats flex gap-6 mb-6">
              <div>
                <span className="block text-2xl font-bold text-gradient">+45%</span>
                <span className="text-sm text-muted">Exposición B2B</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-gradient">2x</span>
                <span className="text-sm text-muted">Alcance de Ofertas</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary">Ver Tarifas 2026</button>
              <button className="btn btn-outline">Espacios Publicitarios</button>
            </div>
          </div>
          <div className="banner-visuals hide-mobile">
            <div className="floating-metric fm-1 glass-panel"><Target size={20} className="text-cyan mb-2" /> CTR Optimizado</div>
            <div className="floating-metric fm-2 glass-panel"><MonitorPlay size={20} className="text-purple mb-2" /> Banner Principal</div>
            <div className="floating-metric fm-3 glass-panel"><FileCheck size={20} className="text-green mb-2" /> Destacado</div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="trust-section">
        <div className="container">
          <p className="text-center text-sm text-muted uppercase tracking-widest mb-8">Un producto respaldado por el ecosistema líder</p>
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
