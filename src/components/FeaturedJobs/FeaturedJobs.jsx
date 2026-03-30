import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Clock, ChevronRight, Bookmark, Star, Target, GraduationCap } from 'lucide-react';
import './FeaturedJobs.css';

const mockJobs = [
  { id: 1, title: 'Jefe de Centro Agua Piscicultura', company: 'Salmones Sur', location: 'Puerto Octay', type: 'Completa', date: 'Hace 2h', isNew: true, isFeatured: true, inclusivo: false, practica: false },
  { id: 2, title: 'Buzo Comercial Submarino', company: 'Aqua Operations', location: 'Quellón', type: 'Turnos', date: 'Hoy', isFeatured: true, inclusivo: true, practica: false },
  { id: 3, title: 'Ingeniero de Proyectos Acuícolas', company: 'TechMarine Group', location: 'Puerto Montt', type: 'Completa', date: 'Ayer', isFeatured: true, inclusivo: false, practica: false },
  { id: 4, title: 'Operario de Planta Procesos', company: 'SeaFoods SA', location: 'Calbuco', type: 'Turnos', date: 'Hace 2d', isNew: true, isFeatured: false, inclusivo: false, practica: false },
  { id: 5, title: 'Analista de Laboratorio I+D', company: 'AquaGen', location: 'Punta Arenas', type: 'Completa', date: 'Hace 3d', isFeatured: true, inclusivo: false, practica: false },
  { id: 6, title: 'Prevencionista de Riesgos Terreno', company: 'Salmones Sur', location: 'Aysén', type: 'Turnos', date: '1 Sem', isFeatured: false, inclusivo: true, practica: false },
  { id: 7, title: 'Práctica Profesional Acuicultura', company: 'MarineHarvest', location: 'Chiloé', type: 'Práctica', date: '2 Sem', isFeatured: false, inclusivo: false, practica: true },
  { id: 8, title: 'Técnico de Mantenimiento', company: 'AquaTech', location: 'Osorno', type: 'Turnos', date: '1 Mes', isFeatured: true, inclusivo: false, practica: false },
];

const FeaturedJobs = () => {
  const [activeTab, setActiveTab] = useState('recientes');

  const filteredJobs = mockJobs.filter(job => {
    if (activeTab === 'destacadas') return job.isFeatured;
    if (activeTab === 'inclusivas') return job.inclusivo;
    if (activeTab === 'practicas') return job.practica;
    return true; // 'recientes'
  }).slice(0, 8); // Limit to 8 elements

  return (
    <section id="buscar" className="jobs-section w-full">
      <div className="section-header-flex">
        <div>
          <h2 className="text-3xl lg:text-4xl mb-2 font-bold flex items-center gap-3">🚀 ENCUENTRA TU DESAFÍO:</h2>
          <p className="text-muted text-black">Las mejores ofertas publicadas en tiempo real.</p>
        </div>
        
        {/* Filters / Tabs */}
        <div className="jobs-tabs glass-panel">
          <button 
            className={`tab-btn ${activeTab === 'recientes' ? 'active' : ''}`}
            onClick={() => setActiveTab('recientes')}
          >Más recientes</button>
          <button 
            className={`tab-btn ${activeTab === 'destacadas' ? 'active' : ''}`}
            onClick={() => setActiveTab('destacadas')}
          >Destacadas</button>
          <button 
            className={`tab-btn tab-btn-pink ${activeTab === 'inclusivas' ? 'active' : ''}`}
            onClick={() => setActiveTab('inclusivas')}
          >Inclusivas</button>
          <button 
            className={`tab-btn tab-btn-blue ${activeTab === 'practicas' ? 'active' : ''}`}
            onClick={() => setActiveTab('practicas')}
          >Prácticas</button>
        </div>
      </div>

      <div className="jobs-grid-small">
        {filteredJobs.map((job, index) => (
          <motion.div 
            key={job.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`job-card-small glass-panel ${job.isFeatured ? 'featured-job-card' : ''}`}
          >
            <div className="job-card-header-small">
              <div className="job-badges-small">
                {job.isNew && <span className="badge badge-new text-xs">Nuevo</span>}
                {job.inclusivo && <span className="badge badge-inclusive text-xs">Inclusiva</span>}
                {job.practica && <span className="badge badge-inclusive text-xs flex items-center gap-1" style={{ background: '#e0f2fe', color: '#0284c7' }}><GraduationCap size={12} /> Práctica</span>}
              </div>
              <button className="save-btn-small" title="Guardar como favorita">
                <Bookmark size={18} fill={job.isFeatured ? "#F59E0B" : "none"} color={job.isFeatured ? "#F59E0B" : "currentColor"} />
              </button>
            </div>
            
            <h3 className="job-title-small" title={job.title}>{job.title}</h3>
            
            <div className="job-meta-small">
              <span className="meta-item-small"><Building2 size={14} style={{ color: '#3b82f6' }} /> <span className="text-black">{job.company}</span></span>
              <span className="meta-item-small"><MapPin size={14} style={{ color: '#ef4444' }} /> <span className="text-black">{job.location}</span></span>
              <span className="meta-item-small"><Clock size={14} style={{ color: '#10b981' }} /> <span className="text-black">{job.type}</span></span>
            </div>
            
            <div className="job-card-footer-small">
              <span className="job-date-small">{job.date}</span>
              <button className="btn btn-primary btn-sm job-action-btn-small">
                Ver
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16 mb-8">
        <button className="btn btn-outline" style={{ color: '#000', borderColor: '#000' }}>Ver Todas las Ofertas</button>
      </div>
    </section>
  );
};

export default FeaturedJobs;
