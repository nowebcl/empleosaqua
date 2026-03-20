import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Clock, ChevronRight, Bookmark } from 'lucide-react';
import './FeaturedJobs.css';

const mockJobs = [
  { id: 1, title: 'Jefe de Centro Agua Piscicultura', company: 'Salmones Sur', location: 'Puerto Octay, Los Lagos', type: 'Jornada Completa', date: 'Hace 2h', isNew: true, isFeatured: true },
  { id: 2, title: 'Buzo Comercial Submarino', company: 'Aqua Operations', location: 'Quellón, Chiloé', type: 'Turnos 14x14', date: 'Hoy', isFeatured: true, inclusivo: true },
  { id: 3, title: 'Ingeniero de Proyectos Acuícolas', company: 'TechMarine Group', location: 'Puerto Montt, Los Lagos', type: 'Jornada Completa', date: 'Ayer', isFeatured: true },
  { id: 4, title: 'Operario de Planta Procesos', company: 'SeaFoods SA', location: 'Calbuco, Los Lagos', type: 'Turnos', date: 'Hace 2 días', isNew: true, isFeatured: false },
  { id: 5, title: 'Analista de Laboratorio I+D', company: 'AquaGen', location: 'Punta Arenas, Magallanes', type: 'Jornada Completa', date: 'Hace 3 días', isFeatured: true },
  { id: 6, title: 'Prevencionista de Riesgos Terreno', company: 'Salmones Sur', location: 'Aysén', type: 'Turnos 7x7', date: 'Hace 1 Sem', isFeatured: false, inclusivo: true },
];

const FeaturedJobs = () => {
  const [activeTab, setActiveTab] = useState('destacadas');

  const filteredJobs = mockJobs.filter(job => {
    if (activeTab === 'destacadas') return job.isFeatured;
    if (activeTab === 'inclusivas') return job.inclusivo;
    return true; // 'recientes'
  });

  return (
    <section id="buscar" className="jobs-section container">
      <div className="section-header-flex">
        <div>
          <h2 className="text-3xl lg:text-4xl mb-2">Encuentra Tu Próximo Desafío</h2>
          <p className="text-muted">Las mejores ofertas publicadas en tiempo real.</p>
        </div>
        
        {/* Filters / Tabs */}
        <div className="jobs-tabs glass-panel">
          <button 
            className={`tab-btn ${activeTab === 'destacadas' ? 'active' : ''}`}
            onClick={() => setActiveTab('destacadas')}
          >Destacadas</button>
          <button 
            className={`tab-btn ${activeTab === 'recientes' ? 'active' : ''}`}
            onClick={() => setActiveTab('recientes')}
          >Más Recientes</button>
          <button 
            className={`tab-btn tab-btn-pink ${activeTab === 'inclusivas' ? 'active' : ''}`}
            onClick={() => setActiveTab('inclusivas')}
          >Inclusivas</button>
        </div>
      </div>

      <div className="jobs-grid">
        {filteredJobs.map((job, index) => (
          <motion.div 
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="job-card glass-panel"
          >
            <div className="job-card-header">
              <div className="job-badges">
                {job.isNew && <span className="badge badge-new">Nuevo</span>}
                {job.isFeatured && <span className="badge badge-featured">Destacada</span>}
                {job.inclusivo && <span className="badge badge-inclusive">Inclusiva</span>}
              </div>
              <button className="save-btn"><Bookmark size={20} /></button>
            </div>
            
            <h3 className="job-title">{job.title}</h3>
            
            <div className="job-meta">
              <span className="meta-item"><Building2 size={16} /> {job.company}</span>
              <span className="meta-item"><MapPin size={16} /> {job.location}</span>
              <span className="meta-item"><Clock size={16} /> {job.type}</span>
            </div>
            
            <div className="job-card-footer">
              <span className="job-date">{job.date}</span>
              <button className="btn btn-outline btn-sm job-action-btn">
                Ver Oferta <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="btn btn-primary">Ver Todas las Ofertas</button>
      </div>
    </section>
  );
};

export default FeaturedJobs;
