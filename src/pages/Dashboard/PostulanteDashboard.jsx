import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  TrendingUp, FileText, Briefcase, Bookmark, MessageSquare, 
  MapPin, Phone, Mail, Calendar, DollarSign, Target, Plus, 
  Trash2, Download, CheckCircle, Info, Edit2, X, HelpCircle, 
  Linkedin, Facebook, Instagram, Twitter, ExternalLink, Globe,
  Shield, Check, User, Award, BookOpen
} from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import './ProfileSections.css';

const SIDEBAR_ITEMS = [
  { label: 'Mi Resumen', path: '#resumen', icon: TrendingUp },
  { label: 'Mi Perfil & CV', path: '#perfil', icon: FileText },
  { label: 'Mis Postulaciones', path: '#postulaciones', icon: Briefcase },
  { label: 'Ofertas Guardadas', path: '#guardadas', icon: Bookmark },
  { label: 'Mensajes', path: '#mensajes', icon: MessageSquare },
];

const INITIAL_APPLICATIONS = [
  { id: 1, role: 'Técnico Acuícola Junior', company: 'Salmones Mar Sur', date: '15 Mar 2026', status: 'postulado', message: 'Tu oferta ha sido exitosa' },
  { id: 2, role: 'Analista de Calidad', company: 'AquaFoods Global', date: '12 Mar 2026', status: 'vieron-cv', message: 'Vas por buen camino' },
  { id: 3, role: 'Buzo Comercial', company: 'Servicios Submarinos Spa', date: '05 Mar 2026', status: 'en-proceso', message: 'Tu candidatura está siendo gestionada' },
  { id: 4, role: 'Operario de Planta', company: 'Seafood Express', date: '01 Mar 2026', status: 'cerrada', message: 'Vacante cerrada' },
];

const PostulanteDashboard = () => {
  const [applications, setApplications] = useState(INITIAL_APPLICATIONS);
  const [activeTab, setActiveTab] = useState('profile');
  const [files, setFiles] = useState({
    cv: 'cv_frainibel_sanchez_2026.pdf',
    extra1: null,
    extra2: null,
    extra3: null
  });

  // Advanced Mouse Tracking for "Genial" Effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tilt
  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), springConfig);
  
  // Parallax layers
  const driftX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), springConfig);
  const driftY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleFileChange = (slot, e) => {
    const file = e.target.files[0];
    if (file) {
      setFiles(prev => ({ ...prev, [slot]: file.name }));
    }
  };

  const removeFile = (slot) => {
    setFiles(prev => ({ ...prev, [slot]: null }));
  };

  const removeApplication = (id) => {
    setApplications(applications.filter(app => app.id !== id));
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'postulado': return { label: 'Postulado', color: 'status-enviada' };
      case 'vieron-cv': return { label: 'Vieron tu CV', color: 'status-revision' };
      case 'en-proceso': return { label: 'En proceso', color: 'status-contactado' };
      case 'cerrada': return { label: 'Vacante cerrada', color: 'status-cerrada' };
      default: return { label: status, color: 'status-cerrada' };
    }
  };

  return (
    <DashboardLayout role="postulante" sidebarItems={SIDEBAR_ITEMS}>
      <div className="profile-dashboard-layout">
        
        {/* Main Content Area */}
        <div className="profile-main-content">
          <div className="profile-container px-0 max-w-none">
            
            {/* Header / Welcome */}
            <div id="resumen" className="mb-8 p-6 bg-white border border-gray-100 rounded-xl shadow-sm" style={{ scrollMarginTop: '90px' }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Hola Frainibel, bienvenido a EmpleosAqua</h2>
              <p className="text-gray-600">Aquí puedes gestionar tus postulaciones y mantener tu perfil profesional actualizado.</p>
            </div>

            {/* Section: Mis Postulaciones */}
            <div id="postulaciones" className="profile-section mb-10 scroll-mt-24">
              <div className="section-header flex justify-between items-center">
                <h2 className="section-title">Mis Postulaciones</h2>
                <span className="text-xs text-gray-400 font-medium">Histórico completo</span>
              </div>
              <div className="section-content p-0">
                <div className="overflow-x-auto">
                  <table className="dash-table w-full">
                    <thead>
                      <tr>
                        <th className="px-6 py-4">Oferta de empleo</th>
                        <th className="px-6 py-4">Empresa</th>
                        <th className="px-6 py-4">Fecha</th>
                        <th className="px-6 py-4">Estado de la postulación</th>
                        <th className="px-6 py-4 text-center">Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <AnimatePresence>
                        {applications.map((app) => {
                          const status = getStatusBadge(app.status);
                          return (
                            <motion.tr 
                              key={app.id}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0, x: -20 }}
                            >
                              <td className="px-6 py-4 font-bold text-blue-900">{app.role}</td>
                              <td className="px-6 py-4">{app.company}</td>
                              <td className="px-6 py-4">{app.date}</td>
                              <td className="px-6 py-4">
                                <span className={`badge-status ${status.color} block mb-1 w-fit`}>
                                  {status.label}
                                </span>
                                <span className="text-[10px] text-gray-400 font-medium italic">{app.message}</span>
                              </td>
                              <td className="px-6 py-4 text-center">
                                <button 
                                  onClick={() => removeApplication(app.id)}
                                  className="text-gray-300 hover:text-red-500 transition-colors p-2"
                                  title="Eliminar del histórico"
                                >
                                  <X size={18} />
                                </button>
                              </td>
                            </motion.tr>
                          );
                        })}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Section 1: Datos Personales */}
            <div id="perfil" className="profile-section relative scroll-mt-24">
              <div className="section-header flex justify-between items-center">
                <h2 className="section-title">Datos Personales</h2>
                <button className="text-blue-500 flex items-center gap-1 text-xs font-bold hover:underline">
                  <Edit2 size={12} /> Modificar perfil
                </button>
              </div>
              <div className="section-content">
                <div className="avatar-section">
                  <div className="avatar-uploader">
                    <div className="avatar-circle">
                      <User size={48} className="avatar-placeholder" />
                    </div>
                    <button className="btn-avatar">Explorar</button>
                  </div>
                  
                  <div className="form-grid flex-1">
                    <div className="form-group relative">
                      <label className="form-label">Nombre Completo (*)</label>
                      <input type="text" className="form-input pr-10" defaultValue="Frainibel Sanchez" />
                      <Edit2 size={14} className="absolute right-3 top-9 text-gray-300 pointer-events-none" />
                    </div>
                    <div className="form-group relative">
                      <label className="form-label">Sexo</label>
                      <select className="form-select">
                        <option>Femenino</option>
                        <option>Masculino</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <div className="form-group relative">
                      <label className="form-label">Estado civil</label>
                      <select className="form-select">
                        <option>Soltero/a</option>
                        <option>Casado/a</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Ciudad (*) </label>
                      <input type="text" className="form-input" defaultValue="Puerto Montt" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Nacionalidad</label>
                      <select className="form-select">
                        <option>Chilena</option>
                        <option>Venezolana</option>
                        <option>Otras</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Fecha de nacimiento</label>
                      <input type="text" className="form-input" defaultValue="1992" placeholder="Año" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Teléfono Móvil (*)</label>
                      <input type="text" className="form-input" defaultValue="935017402" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Cédula (*)</label>
                      <input type="text" className="form-input" defaultValue="277491321" />
                    </div>
                    
                    {/* RRSS Selection */}
                    <div className="form-group-full">
                      <label className="form-label">Redes Sociales</label>
                      <div className="flex gap-4 items-center mt-2">
                        <select className="form-select w-40">
                          <option>LinkedIn</option>
                          <option>Facebook</option>
                          <option>Instagram</option>
                          <option>TikTok</option>
                          <option>X (Twitter)</option>
                        </select>
                        <input type="text" className="form-input flex-1" placeholder="URL de tu perfil..." />
                      </div>
                    </div>

                    {/* Mobility / Availability */}
                    <div className="form-group-full border-t border-gray-100 pt-6 mt-4">
                      <label className="form-label mb-4 text-primary font-bold text-[11px] tracking-widest">MOVILIDAD Y DISPONIBILIDAD</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                          { id: 'disp', label: '¿Tengo disponibilidad?' },
                          { id: 'res', label: 'Cambio de residencia' },
                          { id: 'lic', label: 'Licencia de conducir' },
                          { id: 'veh', label: 'Vehículo propio' }
                        ].map((item, idx) => (
                          <div key={item.id} className="availability-card p-3 rounded-xl border border-gray-100 bg-white shadow-sm flex flex-col gap-3">
                            <span className="text-[10px] font-bold text-gray-500 uppercase leading-tight h-8 flex items-center">{item.label}</span>
                            <div className="flex gap-2">
                              <label className="availability-option flex-1">
                                <input type="radio" name={item.id} defaultChecked={idx % 2 === 0} className="hidden-radio" />
                                <span className="option-pill">Sí</span>
                              </label>
                              <label className="availability-option flex-1">
                                <input type="radio" name={item.id} defaultChecked={idx % 2 !== 0} className="hidden-radio" />
                                <span className="option-pill">No</span>
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="section-footer">
                  <button className="btn-save">Guardar cambios</button>
                </div>
              </div>
            </div>

            {/* Section 2: Experiencia Laboral */}
            <div className="profile-section">
              <div className="section-header flex justify-between items-center">
                <h2 className="section-title">Experiencia Laboral</h2>
                <div className="flex items-center gap-4">
                  <button className="text-blue-500 flex items-center gap-1 text-xs font-bold hover:underline border-r pr-4 border-gray-200">
                    <Plus size={12} /> Agregar cargo
                  </button>
                  <button className="text-gray-400 flex items-center gap-1 text-xs font-bold hover:underline">
                    <Calendar size={12} /> Actualizar historial
                  </button>
                </div>
              </div>
              <div className="section-content">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Nombre de la empresa (*)</label>
                    <input type="text" className="form-input" placeholder="Ej: AquaCorp" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Cargo (*)</label>
                    <input type="text" className="form-input" placeholder="Ej: Analista" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Desde (*)</label>
                    <select className="form-select"><option>Año</option><option>2026</option><option>2025</option></select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Hasta (*)</label>
                    <div className="flex items-center gap-4">
                      <select className="form-select flex-1"><option>Año</option><option>2026</option></select>
                      <label className="flex items-center gap-1 text-[11px] whitespace-nowrap text-blue-600 font-bold">
                        <input type="checkbox" className="w-3 h-3" /> Actual
                      </label>
                    </div>
                  </div>
                  <div className="form-group-full">
                    <label className="form-label">Nivel de experiencia (*)</label>
                    <select className="form-select">
                      <option>Seleccione nivel...</option>
                      <option>Trainee | Junior (0-2 años)</option>
                      <option>Semi Senior (2-5 años)</option>
                      <option>Senior (+5 años)</option>
                    </select>
                  </div>
                  <div className="form-group-full">
                    <label className="form-label">Funciones del cargo (*)</label>
                    <textarea className="form-textarea h-24" placeholder="Describe tus responsabilidades, logros y funciones clave..."></textarea>
                  </div>
                </div>
                
                <div className="section-footer mb-8">
                  <button className="btn-save">Guardar cambios</button>
                </div>

                <div className="history-list">
                  <h3 className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-6 border-b pb-2">Experiencias Anteriores</h3>
                  {[
                    { title: 'Diseñador Gráfico - Freelancer', company: 'Diseñador Independiente', period: '2018 - 2026', level: 'Senior (+5 años)', desc: 'Diseño de piezas gráficas para redes sociales, logotipos, manuales de marca y piezas publicitarias orientadas al rubro acuícola y agroindustrial.' },
                    { title: 'Diseñadora y Coordinadora - Bandia Estudio', company: 'AquaConsult Spa', period: '2017 - 2021', level: 'Semi Senior (2-5 años)', desc: 'Coordinación estratégica de diseño gráfico y comunicación para marcas locales e internacionales.' }
                  ].map((job, i) => (
                    <div key={i} className="history-item group bg-gray-50/30 p-4 rounded-lg relative hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100 mb-2">
                      <div className="item-badge !left-[-1px] !top-6"></div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="item-title flex items-center gap-2">
                            {job.title}
                            <Edit2 size={12} className="text-blue-400 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity" />
                          </h3>
                          <p className="item-subtitle">{job.company}</p>
                        </div>
                        <button className="text-gray-300 hover:text-red-500 transition-colors p-1" title="Eliminar cargo">
                          <X size={16} />
                        </button>
                      </div>
                      <div className="item-meta mt-2 flex gap-4">
                        <span className="flex items-center gap-1 font-bold text-gray-800"><Calendar size={12} /> {job.period}</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-[10px] font-bold">{job.level}</span>
                      </div>
                      <p className="item-desc mt-3 text-xs italic text-gray-500 leading-relaxed border-l-2 border-gray-200 pl-4">{job.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3: Información Académica */}
            <div className="profile-section">
              <div className="section-header flex justify-between items-center">
                <h2 className="section-title">Información Académica</h2>
                <button className="text-blue-500 flex items-center gap-1 text-xs font-bold hover:underline">
                  <Plus size={12} /> Agregar estudio
                </button>
              </div>
              <div className="section-content">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Nivel de estudios</label>
                    <select className="form-select">
                      <option>Seleccione...</option>
                      <option>Básica</option>
                      <option>Media</option>
                      <option>Universitario</option>
                      <option>Postgrado</option>
                      <option>Máster</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Institución</label>
                    <input type="text" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Año de Egreso</label>
                    <div className="flex items-center gap-4">
                      <select className="form-select flex-1"><option>Año</option></select>
                      <label className="flex items-center gap-1 text-[11px] whitespace-nowrap text-blue-600 font-bold">
                        <input type="checkbox" className="w-3 h-3" /> Actual
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="section-footer mb-8">
                  <button className="btn-save">Guardar cambios</button>
                </div>

                <div className="history-list">
                  <div className="history-item group relative">
                    <div className="item-badge bg-blue-500"></div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="item-title flex items-center gap-2">
                          Comunicación Social - Periodismo
                          <Edit2 size={12} className="text-blue-400 opacity-0 group-hover:opacity-100 cursor-pointer" />
                        </h3>
                        <p className="item-subtitle text-xs uppercase font-bold text-gray-400">Universidad Rafael Belloso Chacín</p>
                      </div>
                      <button className="text-gray-300 hover:text-red-500 p-1"><X size={16} /></button>
                    </div>
                    <div className="item-meta mt-1">Graduado (2015)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Habilidades */}
            <div className="profile-section">
              <div className="section-header">
                <h2 className="section-title">Habilidades y Tests</h2>
              </div>
              <div className="section-content">
                <div className="form-group">
                  <label className="form-label">Conocimiento</label>
                  <div className="flex gap-2">
                    <input type="text" className="form-input" placeholder="Ej: Photoshop, Excel..." />
                    <button className="btn btn-secondary py-2">Agregar</button>
                  </div>
                </div>
                
                <div className="skills-container mt-6">
                  {['Photoshop', 'Illustrator', 'Premiere', 'Suite Google', 'Canva', 'Planificación estratégica', 'Creatividad'].map((skill, i) => (
                    <span key={i} className={`skill-tag flex items-center gap-2 ${i < 4 ? 'active' : ''}`}>
                      {skill}
                      <X size={10} className="hover:text-red-300 cursor-pointer" />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 5: Referencias Personales */}
            <div className="profile-section">
              <div className="section-header">
                <h2 className="section-title">Referencias Personales</h2>
              </div>
              <div className="section-content">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Nombre Completo (*)</label>
                    <input type="text" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Relación (*)</label>
                    <select className="form-select">
                      <option>Seleccione...</option>
                      <option>Jefatura directa</option>
                      <option>Supervisor</option>
                      <option>Cliente</option>
                      <option>Colega</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Teléfono (*)</label>
                    <input type="text" className="form-input" />
                  </div>
                  <div className="form-group-full">
                    <label className="form-label">Observación / Recomendación (*)</label>
                    <textarea className="form-textarea h-20" placeholder="Breve observación sobre el desempeño..."></textarea>
                  </div>
                </div>
                <div className="section-footer">
                  <button className="btn-save">Guardar cambios</button>
                </div>
              </div>
            </div>

            {/* Section 6: Documentos - ULTRA-ANIMATED "GENIAL" EDITION */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              onMouseMove={handleMouseMove}
              className="profile-section border-0 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden group/section bg-white rounded-[50px] mb-20"
            >
              {/* Organic Animated Background Blobs */}
              <motion.div 
                style={{ x: driftX, y: driftY }}
                className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"
              />
              <motion.div 
                style={{ x: useSpring(useTransform(mouseX, [0, 1], [30, -30])), y: useSpring(useTransform(mouseY, [0, 1], [30, -30])) }}
                className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-50/30 rounded-full blur-[120px] pointer-events-none"
              />

              <div className="section-content p-12 relative z-10">
                {/* SUCCESS TIPS BAR - ULTRA PREMIUM */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -8 }}
                  className="mb-14 p-10 rounded-[45px] bg-[#0f172a] text-white flex flex-col md:flex-row gap-10 items-center shadow-3xl relative overflow-hidden group/tips"
                >
                   {/* Magnetic pulse element */}
                   <motion.div 
                     animate={{ 
                       scale: [1, 1.2, 1],
                       opacity: [0.05, 0.1, 0.05]
                     }}
                     transition={{ duration: 8, repeat: Infinity }}
                     className="absolute inset-0 bg-blue-500 rounded-full blur-[100px] -z-0"
                   />

                   <div className="flex-1 relative z-10">
                     <h4 className="font-black text-[10px] uppercase tracking-[0.5em] text-blue-400 mb-8 border-b border-white/5 pb-4">Guía de Éxito Profesional</h4>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6">
                       {[
                         "Sé específico en cargo y funciones",
                         "Incluye logros cuantificables",
                         "Habilidades técnicas del sector",
                         "Actualización constante"
                       ].map((tip, i) => (
                         <motion.div 
                           key={i}
                           initial={{ opacity: 0, x: -30 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: 0.4 + (i * 0.15) }}
                           className="flex items-center gap-5 text-[13px] font-bold text-gray-300 group/item cursor-default"
                         >
                           <motion.div 
                             whileHover={{ scale: 1.3, rotate: 180, backgroundColor: "#2563eb", color: "#fff" }}
                             className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 text-[11px] font-black border border-white/5 transition-all duration-500"
                           >
                             {i+1}
                           </motion.div>
                           <span className="group-hover/item:text-white group-hover/item:translate-x-2 transition-all duration-500">{tip}</span>
                         </motion.div>
                       ))}
                     </div>
                   </div>
                   
                   <div className="h-32 border-l border-white/10 hidden md:block"></div>
                   
                   <div className="text-center md:text-left relative z-10 p-6">
                     <motion.div 
                       animate={{ 
                         scale: [1, 1.15, 1],
                       }} 
                       transition={{ duration: 3, repeat: Infinity }}
                       className="text-6xl font-black text-white mb-2 leading-none"
                     >
                       3x
                     </motion.div>
                     <p className="text-[11px] text-blue-400 font-black uppercase tracking-[0.3em]">Visibilidad IA</p>
                   </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
                  {/* MAIN CV CARD - 3D PARALLAX DEPTH */}
                  <div style={{ perspective: 1500 }}>
                    <motion.div 
                      style={{ rotateX, rotateY }}
                      className="relative h-full group/cv border border-gray-50 p-14 rounded-[60px] bg-white shadow-2xl flex flex-col items-center text-center transition-all duration-1000 hover:shadow-blue-900/15"
                    >
                        <motion.div 
                          animate={{ 
                            y: [0, -15, 0],
                            rotateZ: [0, 8, 0]
                          }}
                          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                          className="w-32 h-32 rounded-[40px] bg-blue-600 shadow-[0_30px_60px_-10px_rgba(37,99,235,0.5)] flex items-center justify-center text-white mb-12 relative overflow-hidden"
                        >
                          <motion.div 
                             animate={{ x: [-100, 200] }}
                             transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                             className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                          />
                          <FileText size={64} strokeWidth={1} />
                        </motion.div>
                        
                        <h4 className="text-4xl font-black text-[#0f172a] mb-3 tracking-tighter">Mi CV</h4>
                        <p className="text-[12px] text-blue-500 font-black uppercase tracking-[0.4em] mb-14 opacity-50">Master Version</p>
                        
                        <AnimatePresence mode="wait">
                          {files.cv ? (
                            <motion.div 
                              key="uploaded"
                              initial={{ opacity: 0, y: 30, scale: 0.9 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                              className="w-full bg-[#f8fafc] p-8 rounded-[35px] border border-blue-50 flex items-center gap-6 shadow-inner group/file"
                            >
                              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 text-sm font-black shadow-sm group-hover/file:bg-blue-600 group-hover/file:text-white group-hover/file:rotate-6 transition-all duration-500">PDF</div>
                              <div className="flex-1 text-left">
                                <span className="text-xs text-[#0f172a] font-black block truncate mb-1">{files.cv}</span>
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                                  <span className="text-[11px] text-green-600 font-extrabold uppercase tracking-tighter">Verificado</span>
                                </div>
                              </div>
                              <button 
                                onClick={() => removeFile('cv')} 
                                className="text-gray-300 hover:text-red-500 transition-all p-4 hover:bg-red-50 rounded-2xl"
                              >
                                <Trash2 size={24} />
                              </button>
                            </motion.div>
                          ) : (
                            <motion.div key="upload" className="w-full">
                              <input type="file" className="hidden" id="file-cv" onChange={(e) => handleFileChange('cv', e)} />
                              <motion.label 
                                htmlFor="file-cv" 
                                whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                                whileTap={{ scale: 0.95 }}
                                className="block w-full py-7 bg-[#0f172a] text-white rounded-[35px] text-[14px] font-black uppercase tracking-[0.25em] cursor-pointer shadow-3xl shadow-blue-900/40 text-center transition-all duration-500"
                              >
                                Cargar Ahora
                              </motion.label>
                            </motion.div>
                          )}
                        </AnimatePresence>
                    </motion.div>
                  </div>

                  {/* GENERADOR PRO CARD - THE "GENIAL" BRAIN */}
                  <div style={{ perspective: 1500 }}>
                    <motion.div 
                      style={{ rotateX, rotateY }}
                      className="p-14 h-full rounded-[60px] bg-gradient-to-br from-blue-700 to-[#1e293b] text-white flex flex-col items-center justify-center text-center shadow-4xl shadow-blue-900/50 group relative overflow-hidden"
                    >
                      {/* Animated Glow Element */}
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#22d3ee_0%,transparent_70%)] opacity-30 pointer-events-none"
                      />
                      
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          y: [0, -20, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                      >
                        <div className="w-32 h-32 rounded-[45px] bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center mb-12 shadow-3xl">
                          <motion.div
                            animate={{ rotateY: [0, 360] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                          >
                            <Edit2 size={64} className="text-cyan-400" />
                          </motion.div>
                        </div>
                      </motion.div>

                      <h5 className="text-[13px] font-black uppercase tracking-[0.5em] mb-6 relative z-10 text-cyan-400">Genial AI Builder</h5>
                      <p className="text-[14px] text-blue-100/80 mb-14 leading-relaxed relative z-10 px-6 font-bold tracking-tight">
                        Nuestro motor inteligente redactará tu perfil profesional en base a estándares <span className="text-white border-b-2 border-cyan-400">Acuícolas Globales</span>.
                      </p>
                      
                      <motion.button 
                        whileHover={{ 
                          scale: 1.05,
                          y: -5,
                          boxShadow: "0 25px 50px rgba(34, 211, 238, 0.5)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-7 bg-white text-[#0f172a] rounded-[35px] text-[13px] font-black uppercase tracking-[0.3em] shadow-2xl transition-all duration-700 relative z-10"
                      >
                        Comenzar Flujo AI
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* SECONDARY DOCUMENTS - HIGH END LIST */}
                  <div className="flex flex-col gap-6 justify-between">
                    {[
                      { id: 'extra1', label: 'Títulos & Grados', icon: Award },
                      { id: 'extra2', label: 'Capacitaciones OS8', icon: Shield },
                      { id: 'extra3', label: 'Antecedentes Penales', icon: Check }
                    ].map((doc, idx) => (
                      <motion.div 
                        key={doc.id}
                        initial={{ opacity: 0, x: 50, rotateX: 45 }}
                        whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                        transition={{ delay: 0.3 + (0.15 * idx), type: "spring", stiffness: 100 }}
                        whileHover={{ x: -15, scale: 1.05, z: 20 }}
                        className="p-7 rounded-[40px] border border-gray-100 bg-white shadow-2xl hover:shadow-blue-900/10 hover:border-blue-200 transition-all flex items-center gap-7 group cursor-pointer relative"
                      >
                        <div className="w-16 h-16 rounded-3xl bg-[#f8fafc] flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12 transition-all duration-700 shadow-sm border border-gray-50">
                          <doc.icon size={32} />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-[12px] font-black text-[#0f172a] uppercase tracking-widest mb-1.5">{doc.label}</h5>
                          {files[doc.id] ? (
                            <motion.span 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }}
                              className="text-[12px] text-blue-600 font-extrabold truncate block max-w-[160px]"
                            >
                              {files[doc.id]}
                            </motion.span>
                          ) : (
                            <span className="text-[11px] text-gray-300 font-extrabold tracking-tighter italic">Ready for upload</span>
                          )}
                        </div>
                        <input type="file" className="hidden" id={`file-${doc.id}`} onChange={(e) => handleFileChange(doc.id, e)} />
                        <label htmlFor={`file-${doc.id}`} className="w-12 h-12 flex items-center justify-center cursor-pointer text-gray-200 hover:text-blue-600 transition-colors">
                          <Plus size={32} />
                        </label>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* COMPLETION ANALYTICS - ULTRA ANIMATED */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mt-20 border-t border-gray-100 pt-20 flex flex-col md:flex-row justify-between items-center relative overflow-hidden group/analytics"
                >
                   <div className="flex items-center gap-10 relative z-10 mb-10 md:mb-0">
                      <motion.div 
                        animate={{ 
                          rotate: 360,
                        }}
                        transition={{ 
                          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                        }}
                        className="w-20 h-20 bg-blue-600 rounded-[28px] flex items-center justify-center shadow-2xl relative"
                      >
                        <TrendingUp size={40} className="text-white relative z-10" />
                      </motion.div>
                      <div>
                        <h4 className="font-black text-[11px] uppercase tracking-[0.6em] text-blue-400 mb-4">Elite Ranking Potential</h4>
                        <p className="text-[18px] text-[#0f172a] font-black leading-tight">Tu perfil está al <span className="text-blue-600 text-2xl font-black">85%</span>.<br/><span className="text-[12px] text-gray-400 font-bold uppercase tracking-widest">Un paso de la certificación máxima.</span></p>
                      </div>
                   </div>

                   <div className="flex flex-col items-end gap-5 w-full md:w-auto relative z-10 px-4">
                      <div className="flex items-baseline gap-3">
                        <span className="text-6xl font-black text-[#0f172a] tracking-tighter">85</span>
                        <span className="text-2xl font-black text-blue-500 tracking-widest">%</span>
                      </div>
                      <div className="w-full md:w-80 h-4 bg-gray-100 rounded-full overflow-hidden border border-gray-200 p-[2px] shadow-inner">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 bg-[length:200%_100%] rounded-full relative" 
                        >
                           <motion.div
                             animate={{ x: ['100%', '-100%'] }}
                             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                             className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                           />
                        </motion.div>
                      </div>
                   </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Placeholder Sections */}
            <div id="guardadas" className="profile-section mb-10 scroll-mt-24">
              <div className="section-header">
                <h2 className="section-title">Ofertas Guardadas</h2>
              </div>
              <div className="section-content flex flex-col items-center justify-center py-12 text-gray-400">
                <Bookmark size={48} className="mb-4 opacity-20" />
                <p>Aún no tienes ofertas guardadas.</p>
              </div>
            </div>

            <div id="mensajes" className="profile-section mb-10 scroll-mt-24">
              <div className="section-header">
                <h2 className="section-title">Mis Mensajes</h2>
              </div>
              <div className="section-content flex flex-col items-center justify-center py-12 text-gray-400">
                <MessageSquare size={48} className="mb-4 opacity-20" />
                <p>Tu bandeja de entrada está vacía.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Help Sidebar */}
        <aside className="profile-help-sidebar desktop-only">
          <div className="profile-help-sidebar flex flex-col gap-6 sticky top-[90px] h-[calc(100vh-120px)] overflow-y-auto pr-2 custom-scrollbar">
            <div className="help-card bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <BookOpen size={16} />
                  <h4 className="font-bold text-xs uppercase tracking-wider">Acceso Postulante</h4>
                </div>
                <h3 className="text-sm font-bold">Plantilla de Perfil Laboral</h3>
              </div>
              
              <div className="p-4 space-y-6">
                <div>
                  <p className="text-[11px] text-gray-600 leading-relaxed mb-3">
                    Completar tu perfil de manera estratégica en <strong>EmpleosAqua</strong> es clave para aumentar tus oportunidades en sectores técnicos y acuícolas.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h5 className="text-[10px] font-bold text-blue-900 mb-2">💎 ¿POR QUÉ ES IMPORTANTE?</h5>
                    <ul className="text-[10px] text-blue-800/80 space-y-1">
                      <li>• Las empresas usan filtros y palabras clave.</li>
                      <li>• Un perfil completo genera mayor confianza.</li>
                      <li>• Mejora tu posicionamiento en búsquedas.</li>
                      <li>• Aumenta probabilidades de contacto directo.</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h5 className="text-[10px] font-bold text-gray-800 mb-2">🚀 ¿CÓMO DESTACAR?</h5>
                  <ul className="text-[10px] text-gray-600 space-y-2">
                    <li className="flex gap-2"><span>✔</span> <span>Sé específico en cargo y funciones reales.</span></li>
                    <li className="flex gap-2"><span>✔</span> <span>Incluye logros concretos, no solo tareas.</span></li>
                    <li className="flex gap-2"><span>✔</span> <span>Agrega habilidades técnicas relevantes.</span></li>
                    <li className="flex gap-2"><span>✔</span> <span>Mantén tu información actualizada.</span></li>
                  </ul>
                </div>

                <div className="border-t border-gray-50 pt-4 space-y-4">
                  <div>
                    <h5 className="text-[10px] font-bold text-gray-400 mb-2 flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div> 1. DATOS PERSONALES
                    </h5>
                    <div className="space-y-2 text-[10px]">
                      <p><strong>Nombres:</strong> Usa tu nombre real y completo.</p>
                      <p><strong>Dirección:</strong> Clave en la industria. La cercanía a plantas es valorada.</p>
                      <p><strong>Comuna/Ciudad:</strong> Ayuda a filtrar por zona.</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-[10px] font-bold text-gray-400 mb-2 flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div> 2. EXPERIENCIA LABORAL
                    </h5>
                    <div className="space-y-2 text-[10px]">
                      <p><strong>Empresa:</strong> Indica si fue del sector acuícola.</p>
                      <p><strong>Desde/Hasta:</strong> Si sigues ahí, marca <strong>"Actual"</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="help-card bg-amber-50 border border-amber-100 rounded-2xl p-4">
               <h4 className="font-bold text-amber-900 text-[10px] mb-2">💡 ÚLTIMA RECOMENDACIÓN</h4>
               <p className="text-[10px] text-amber-800/80 leading-relaxed">
                 Usa verbos de acción: <em>Coordiné, supervisé, implementé, gestioné, optimicé.</em>
               </p>
            </div>
          </div>
        </aside>

      </div>
    </DashboardLayout>
  );
};

export default PostulanteDashboard;
