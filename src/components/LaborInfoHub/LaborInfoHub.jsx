import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, TrendingUp } from 'lucide-react';
import './LaborInfoHub.css';

const news = [
  { id: 1, type: 'Noticia', title: 'Nueva normativa laboral para el sector acuícola entra en vigencia', date: '18 Mar 2026', readTime: '5 min' },
  { id: 2, type: 'Plantilla', title: 'Descarga el modelo de CV ideal para cargos técnicos', date: 'Recurso', readTime: 'PDF' },
  { id: 3, type: 'Análisis', title: 'Demanda de profesionales en Magallanes crece un 45%', date: '15 Mar 2026', readTime: '8 min' },
  { id: 4, type: 'Evento', title: 'Feria Laboral Acuícola 2026 - Inscripciones Abiertas', date: 'Abril 2026', readTime: 'Online' },
];

const LaborInfoHub = () => {
  return (
    <section id="info" className="hub-section container">
      <div className="hub-header mb-12">
        <h2 className="text-3xl lg:text-4xl mb-4 text-center">Hub de <span className="text-gradient">Información Laboral</span></h2>
        <p className="text-muted text-center max-w-2xl mx-auto">Mantente actualizado con las últimas tendencias, normativas y recursos para potenciar tu desarrollo profesional.</p>
      </div>

      <div className="hub-grid">
        {/* Main Featured Article */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hub-featured glass-panel"
        >
          <div className="interactive-chart-container">
            <div className="chart-bg-grid"></div>
            
            <div className="chart-bar-wrapper">
              <motion.div 
                className="chart-bar"
                initial={{ height: 0 }}
                whileInView={{ height: '35%' }}
                transition={{ duration: 1, delay: 0.1, type: "spring" }}
                viewport={{ once: true }}
              >
                <span className="chart-label-top">$850K</span>
              </motion.div>
              <span className="chart-label-bottom">2023</span>
            </div>

            <div className="chart-bar-wrapper">
              <motion.div 
                className="chart-bar"
                initial={{ height: 0 }}
                whileInView={{ height: '50%' }}
                transition={{ duration: 1, delay: 0.2, type: "spring" }}
                viewport={{ once: true }}
              >
                <span className="chart-label-top">$980K</span>
              </motion.div>
              <span className="chart-label-bottom">2024</span>
            </div>

            <div className="chart-bar-wrapper">
              <motion.div 
                className="chart-bar"
                initial={{ height: 0 }}
                whileInView={{ height: '65%' }}
                transition={{ duration: 1, delay: 0.3, type: "spring" }}
                viewport={{ once: true }}
              >
                <span className="chart-label-top">$1.2M</span>
              </motion.div>
              <span className="chart-label-bottom">2025</span>
            </div>

            <div className="chart-bar-wrapper">
              <motion.div 
                className="chart-bar"
                initial={{ height: 0 }}
                whileInView={{ height: '85%' }}
                transition={{ duration: 1, delay: 0.4, type: "spring" }}
                viewport={{ once: true }}
              >
                <span className="chart-label-top">$1.5M</span>
              </motion.div>
              <span className="chart-label-bottom">2026</span>
            </div>
            
          </div>
          <div className="featured-content">
            <span className="badge badge-new mb-4 text-xs">Estudio de Mercado</span>
            <h3 className="featured-title">Proyecciones Salariales en la Industria Salmonera Chilena 2026-2030</h3>
            <p className="featured-excerpt">Análisis exhaustivo sobre las bandas salariales, beneficios y competencias más valoradas por las principales empresas del sector.</p>
            <div className="featured-meta mt-6 flex justify-between items-center w-full">
              <span className="text-muted text-sm flex gap-2 items-center"><BookOpen size={16}/> 12 min de lectura</span>
              <button className="btn btn-outline btn-sm">Leer Artículo <ArrowRight size={16}/></button>
            </div>
          </div>
        </motion.div>

        {/* Small Articles List */}
        <div className="hub-list flex-col gap-4">
          {news.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="hub-item glass-panel flex-row gap-4 items-center"
            >
              <div className="hub-item-icon">
                {item.type === 'Noticia' && <TrendingUp size={24} className="text-cyan" />}
                {item.type === 'Plantilla' && <BookOpen size={24} className="text-purple" />}
                {item.type === 'Análisis' && <TrendingUp size={24} className="text-gold" />}
                {item.type === 'Evento' && <Calendar size={24} className="text-green" />}
              </div>
              <div className="hub-item-content">
                <div className="text-xs text-muted mb-1 flex justify-between">
                  <span>{item.type}</span>
                  <span>{item.date}</span>
                </div>
                <h4 className="font-semibold text-sm leading-tight hover:text-cyan transition-colors cursor-pointer">{item.title}</h4>
              </div>
            </motion.div>
          ))}
          <button className="btn btn-secondary w-full mt-2">Visitar Hub Completo</button>
        </div>
      </div>
    </section>
  );
};

export default LaborInfoHub;
