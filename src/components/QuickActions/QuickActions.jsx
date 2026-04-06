import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, Star, Heart, GraduationCap, FilePlus, DollarSign, Image, UserCircle, Building2 } from 'lucide-react';
import './QuickActions.css';

const actionsPostulante = [
  { id: 1, title: 'Crear Currículum', icon: <FileText size={20} />, color: '#3b82f6' }, /* Blue */
  { id: 2, title: 'Todas las ofertas', icon: <Search size={20} />, color: '#10b981' }, /* Green */
  { id: 3, title: 'Ofertas destacadas', icon: <Star size={20} />, color: '#f59e0b' },  /* Amber */
  { id: 4, title: 'Ofertas inclusivas', icon: <Heart size={20} />, color: '#ec4899' }, /* Pink */
  { id: 5, title: 'Prácticas', icon: <GraduationCap size={20} />, color: '#8b5cf6' },  /* Purple */
];

const actionsEmpresa = [
  { id: 6, title: 'Publicar ofertas', icon: <FilePlus size={20} />, color: '#06b6d4' }, /* Cyan */
  { id: 7, title: 'Tarifas', icon: <DollarSign size={20} />, color: '#84cc16' },      /* Lime */
  { id: 8, title: 'Espacios publicitarios', icon: <Image size={20} />, color: '#ef4444' }, /* Red */
];

const QuickActions = () => {
  return (
    <section className="quicks-section container mx-auto">
      {/* Postulantes Section */}
      <div className="quicks-postulantes mb-12">
        <div className="flex justify-center mb-6">
          <h3 className="section-title-badge badge-postulante">
            <UserCircle size={18} />
            <span>Postulantes</span>
          </h3>
        </div>
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
      <div className="quicks-empresas mt-4">
        <div className="flex justify-center mb-6">
          <h3 className="section-title-badge badge-empresa">
            <Building2 size={18} />
            <span>Empresas</span>
          </h3>
        </div>
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
