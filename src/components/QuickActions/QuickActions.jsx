import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, Star, Heart, Anchor, FilePlus, DollarSign, Image } from 'lucide-react';
import './QuickActions.css';

const actionsPostulante = [
  { id: 1, title: 'Crear Currículo', icon: <FileText size={20} />, color: '#0EA5E9' },
  { id: 2, title: 'Todas las ofertas', icon: <Search size={20} />, color: '#0EA5E9' },
  { id: 3, title: 'Ofertas destacadas', icon: <Star size={20} />, color: '#0EA5E9' },
  { id: 4, title: 'Ofertas inclusivas', icon: <Heart size={20} />, color: '#0EA5E9' },
  { id: 5, title: 'Prácticas', icon: <Anchor size={20} />, color: '#0EA5E9' },
];

const actionsEmpresa = [
  { id: 6, title: 'Publicar ofertas', icon: <FilePlus size={20} />, color: '#06B6D4' },
  { id: 7, title: 'Tarifas', icon: <DollarSign size={20} />, color: '#06B6D4' },
  { id: 8, title: 'Espacios publicitarios', icon: <Image size={20} />, color: '#06B6D4' },
];

const QuickActions = () => {
  return (
    <section className="quicks-section container mx-auto">
      {/* Postulantes Section */}
      <div className="quicks-postulantes mb-8">
        <h3 className="section-title-small mb-4 text-center text-muted uppercase tracking-wider text-sm font-semibold">Postulantes</h3>
        <div className="quicks-grid-5">
          {actionsPostulante.map((action, index) => (
            <motion.div 
              key={action.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="quick-card-small glass-panel"
              style={{ '--hover-color': action.color }}
            >
              <div className="quick-icon-small" style={{ color: action.color, background: `${action.color}15` }}>
                {action.icon}
              </div>
              <div className="quick-content-small">
                <h4 className="quick-title-small">{action.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Empresas Section */}
      <div className="quicks-empresas">
        <h3 className="section-title-small mb-4 text-center text-muted uppercase tracking-wider text-sm font-semibold">Empresas</h3>
        <div className="quicks-grid-3">
          {actionsEmpresa.map((action, index) => (
            <motion.div 
              key={action.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="quick-card-small glass-panel"
              style={{ '--hover-color': action.color }}
            >
              <div className="quick-icon-small" style={{ color: action.color, background: `${action.color}15` }}>
                {action.icon}
              </div>
              <div className="quick-content-small">
                <h4 className="quick-title-small">{action.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
