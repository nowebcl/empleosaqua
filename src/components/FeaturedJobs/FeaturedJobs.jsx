import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Clock, ChevronRight, Bookmark, Star, Target, GraduationCap, Heart } from 'lucide-react';
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
  const [savedJobs, setSavedJobs] = useState([]);

  const toggleSaveJob = (jobId) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId) 
        : [...prev, jobId]
    );
  };

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
          <h2 className="text-3xl lg:text-4xl mb-2 font-bold flex items-center gap-3 text-black">🚀 ENCUENTRA TU DESAFÍO:</h2>
          <p className="text-black font-medium">Las mejores ofertas publicadas en tiempo real.</p>
        </div>
        
        {/* Filters / Tabs */}
        <div className="jobs-tabs bg-[#005f99] text-white rounded-xl shadow-md p-2 flex gap-2 overflow-x-auto">
          <button 
            className={`tab-btn px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'recientes' ? 'bg-white text-[#005f99] shadow-sm' : 'hover:bg-white/10 text-white'}`}
            onClick={() => setActiveTab('recientes')}
          >Más recientes</button>
          <button 
            className={`tab-btn px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'destacadas' ? 'bg-white text-[#005f99] shadow-sm' : 'hover:bg-white/10 text-white'}`}
            onClick={() => setActiveTab('destacadas')}
          >Destacadas</button>
          <button 
            className={`tab-btn px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'inclusivas' ? 'bg-[#ec4899] text-white shadow-sm' : 'hover:bg-white/10 text-white'}`}
            onClick={() => setActiveTab('inclusivas')}
          >Inclusivas</button>
          <button 
            className={`tab-btn px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'practicas' ? 'bg-[#8b5cf6] text-white shadow-sm' : 'hover:bg-white/10 text-white'}`}
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
            className={`job-card-small glass-panel overflow-hidden relative ${job.isFeatured ? 'featured-job-card' : ''}`}
          >
            {/* Top orange line gradient for featured/all jobs */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
            
            <div className="job-card-header-small mt-2">
              <div className="job-badges-small">
                {job.isNew && <span className="badge badge-new text-xs">Nuevo</span>}
                {job.isFeatured && <span className="badge badge-featured text-xs flex items-center gap-1"><Star size={12} fill="currentColor" /> Destacada</span>}
                {job.inclusivo && <span className="badge badge-inclusive text-xs flex items-center gap-1"><Heart size={12} /> Inclusiva</span>}
                {job.practica && <span className="badge badge-inclusive text-xs flex items-center gap-1" style={{ background: '#e0f2fe', color: '#0284c7' }}><GraduationCap size={12} /> Práctica</span>}
              </div>
              <button 
                className={`save-btn-small ${savedJobs.includes(job.id) ? 'is-saved' : ''}`} 
                onClick={() => toggleSaveJob(job.id)}
                title={savedJobs.includes(job.id) ? "Quitar de favoritos" : "Guardar como favorita"}
              >
                <Bookmark 
                  size={18} 
                  fill={savedJobs.includes(job.id) ? "#F59E0B" : "none"} 
                  color={savedJobs.includes(job.id) ? "#F59E0B" : "currentColor"} 
                  className="transition-all duration-300"
                />
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

      <div style={{ textAlign: 'center', marginTop: '60px', marginBottom: '40px', width: '100%', paddingTop: '20px' }}>
        <button className="btn btn-outline shadow-md" style={{ color: '#000', borderColor: '#000', borderWidth: '2px', padding: '12px 32px', fontWeight: 'bold', borderRadius: '50px', backgroundColor: '#fff' }}>Ver Todas las Ofertas</button>
      </div>
    </section>
  );
};

export default FeaturedJobs;
