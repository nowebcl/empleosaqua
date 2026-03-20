import React from 'react';
import { motion } from 'framer-motion';
import { FilePlus, Search, Star, FileText, Heart, Anchor } from 'lucide-react';
import './QuickActions.css';

const actions = [
  { id: 1, title: 'Publicar Oferta', icon: <FilePlus size={24} />, desc: 'Encuentra al talento ideal para tu empresa', color: '#10B981' },
  { id: 2, title: 'Ver Ofertas', icon: <Search size={24} />, desc: 'Explora miles de oportunidades laborales', color: '#3B82F6' },
  { id: 3, title: 'Destacadas', icon: <Star size={24} />, desc: 'Las mejores ofertas del sector acuícola', color: '#F59E0B' },
  { id: 4, title: 'Crear Currículum', icon: <FileText size={24} />, desc: 'Destaca tu perfil profesional hoy', color: '#8B5CF6' },
  { id: 5, title: 'Inclusivas', icon: <Heart size={24} />, desc: 'Ofertas bajo la ley de inclusión laboral', color: '#EC4899' },
  { id: 6, title: 'Prácticas', icon: <Anchor size={24} />, desc: 'Comienza tu carrera en la industria', color: '#00E5FF' },
];

const QuickActions = () => {
  return (
    <section className="quicks-section container">
      <div className="section-header text-center mb-12">
        <h2 className="text-3xl lg:text-4xl mb-4">¿Qué necesitas hacer hoy?</h2>
        <p className="text-muted max-w-2xl mx-auto">Accesos rápidos a las herramientas más utilizadas de la plataforma.</p>
      </div>

      <div className="quicks-grid">
        {actions.map((action, index) => (
          <motion.div 
            key={action.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="quick-card glass-panel"
            style={{ '--hover-color': action.color }}
          >
            <div className="quick-icon" style={{ color: action.color, background: `${action.color}15` }}>
              {action.icon}
            </div>
            <div className="quick-content">
              <h3 className="quick-title">{action.title}</h3>
              <p className="quick-desc">{action.desc}</p>
            </div>
            <div className="quick-arrow">→</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
