import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  TrendingUp, FileText, Briefcase, Bookmark, MessageSquare, 
  MapPin, Phone, Mail, Calendar, DollarSign, Target, Plus, 
  Trash2, Download, CheckCircle, Info, Edit2, X, HelpCircle, 
  Linkedin, Facebook, Instagram, Twitter, ExternalLink, Globe,
  Shield, Check, User, Award, BookOpen, Layout, Zap, Bot, Sparkles, Cpu, Folder, Heart, Eye
} from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import './ProfileSections.css';

const SIDEBAR_ITEMS = [
  { label: 'Mi Perfil & CV', path: '#perfil', icon: FileText },
  { label: 'Mis Postulaciones', path: '#postulaciones', icon: Briefcase },
  { label: 'Mis Favoritos', path: '#favoritos', icon: Heart },
  { label: 'Ofertas Guardadas', path: '#guardadas', icon: Bookmark },
  { label: 'Mensajes', path: '#mensajes', icon: MessageSquare },
  { label: 'Test y Habilidades', path: '#habilidades', icon: Award },
];

const INITIAL_APPLICATIONS = [
  { id: 1, role: 'Técnico Acuícola Junior', company: 'Salmones Mar Sur', date: '15 Mar 2026', status: 'postulado', message: 'Tu postulación ha sido exitosa.' },
  { id: 2, role: 'Analista de Calidad', company: 'AquaFoods Global', date: '12 Mar 2026', status: 'vieron-cv', message: 'Vas por buen camino' },
  { id: 4, role: 'Operario de Planta', company: 'Seafood Express', date: '01 Mar 2026', status: 'cerrada', message: 'Vacante cerrada' },
];

const PostulanteDashboard = () => {
  const [applications, setApplications] = useState(INITIAL_APPLICATIONS);
  const [activeTab, setActiveTab] = useState('profile');
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#perfil');

  React.useEffect(() => {
    const handleHash = () => setCurrentHash(window.location.hash || '#perfil');
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);
  const [files, setFiles] = useState({
    cv: 'cv_frainibel_sanchez_2026.pdf',
    extra1: null,
    extra2: null,
    extra3: null
  });

  const [hasDisability, setHasDisability] = useState(false);
  const [selectedDisabilities, setSelectedDisabilities] = useState([]);

  const disabilityOptions = [
    'Física o movilidad reducida',
    'Sensorial (visual y/o auditiva)',
    'Psíquica o de salud mental',
    'Intelectual',
    'Múltiple',
    'Prefiero no indicar'
  ];

  const toggleDisabilityType = (type) => {
    setSelectedDisabilities(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

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
            <div className="mb-8 p-6 bg-white border border-gray-100 rounded-xl shadow-sm relative">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Hola Frainibel, bienvenido a EmpleosAqua</h2>

              <p className="text-gray-600 font-bold">Aquí puedes gestionar tus postulaciones y mantener tu perfil laboral actualizado.</p>
            </div>

            {currentHash === '#postulaciones' && (
            <div id="postulaciones" className="profile-section mb-10">
              {/* Section: Mis Postulaciones */}
              <div className="section-header flex justify-between items-center">
                <h2 className="section-title">Mis Postulaciones</h2>
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
                                <div className="status-wrapper">
                                  <span className={`badge-status ${status.color}`}>
                                    {status.label}
                                  </span>
                                  <div className="status-tooltip">
                                    <div className="tooltip-arrow"></div>
                                    {app.message}
                                  </div>
                                </div>
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
            )}

            {currentHash === '#perfil' && (
            <div className="flex flex-col gap-8">
            {/* Section 1: Datos Personales */}
            <div id="perfil" className="profile-section relative">
              <div className="section-header flex justify-between items-center">
                <h2 className="section-title">Datos Personales</h2>
                <div className="flex items-center gap-3">
                  <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full flex items-center gap-2 text-[11px] font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95">
                    <Eye size={14} /> Ver CV (finalizado)
                  </button>
                  <button className="bg-white border-2 border-blue-600 text-blue-600 px-4 py-1.5 rounded-full flex items-center gap-2 text-[11px] font-bold hover:bg-blue-50 transition-all active:scale-95">
                    <Download size={14} /> Descarga (Word y PDF)
                  </button>
                  <button className="text-gray-400 flex items-center gap-1 text-xs font-bold hover:text-blue-500 transition-colors ml-2">
                    <Edit2 size={12} /> Modificar perfil
                  </button>
                </div>
              </div>
              <div className="section-content">
                <div className="avatar-section">
                  <div className="avatar-uploader">
                    <div className="avatar-circle">
                      <User size={48} className="avatar-placeholder" />
                    </div>
                    <button className="btn-avatar">Subir</button>
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-group m-0">
                        <label className="form-label">Nombres (*)</label>
                        <input type="text" className="form-input" defaultValue="Frainibel" />
                      </div>
                      <div className="form-group m-0">
                        <label className="form-label">Apellidos (*)</label>
                        <input type="text" className="form-input" defaultValue="Sanchez" />
                      </div>
                    <div className="form-group m-0">
                      <label className="form-label">RUT (*)</label>
                      <input type="text" className="form-input bg-gray-100 text-gray-500 cursor-not-allowed border-gray-200" defaultValue="27.749.132-1" readOnly disabled />
                    </div>
                    
                    <div className="form-group m-0">
                      <label className="form-label">Email (*)</label>
                      <input type="email" className="form-input bg-gray-100 text-gray-500 cursor-not-allowed border-gray-200" defaultValue="usuario@aqua.cl" readOnly disabled />
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Teléfono (*)</label>
                      <div style={{ display: 'flex', height: '34px', alignItems: 'stretch' }}>
                        <span 
                          style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            padding: '0 12px', 
                            background: '#f1f5f9', 
                            color: '#64748b', 
                            fontWeight: 'bold', 
                            fontSize: '12px',
                            border: '1px solid #e2e8f0', 
                            borderRight: 'none', 
                            borderTopLeftRadius: '6px', 
                            borderBottomLeftRadius: '6px', 
                            whiteSpace: 'nowrap',
                            flexShrink: 0
                          }}>
                          +56&nbsp;9
                        </span>
                        <input 
                          type="text" 
                          className="form-input" 
                          style={{ 
                            borderTopLeftRadius: '0', 
                            borderBottomLeftRadius: '0',
                            flex: 1,
                            margin: 0,
                            height: '100%'
                          }} 
                          defaultValue="35017402" 
                        />
                      </div>
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Fecha de nacimiento (*)</label>
                      <input type="text" className="form-input" placeholder="DD-MM-AAAA" defaultValue="15-08-1992" />
                    </div>

                    <div className="form-group m-0">
                      <label className="form-label">Sexo (*)</label>
                      <select className="form-select">
                        <option>Femenino</option>
                        <option>Masculino</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Estado civil (*)</label>
                      <select className="form-select" defaultValue="Soltero/a">
                        <option>Soltero/a</option>
                        <option>Casado/a</option>
                        <option>Unión Libre</option>
                        <option>Divorciado/a</option>
                        <option>Pareja de Hecho</option>
                        <option>Viudo/a</option>
                      </select>
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Nacionalidad (*)</label>
                      <input type="text" className="form-input" defaultValue="Venezolana" />
                    </div>

                    <div className="form-group m-0">
                      <label className="form-label">Dirección (*)</label>
                      <input type="text" className="form-input" defaultValue="Av. Sol Marino 123" />
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Comuna (*)</label>
                      <input type="text" className="form-input" defaultValue="Puerto Montt" />
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Ciudad (*)</label>
                      <input type="text" className="form-input" defaultValue="Puerto Montt" />
                    </div>
                    </div>

                    {/* RRSS Selection */}
                    <div className="form-group-full w-full">
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                          { id: 'res', label: '¿Tiene disposición para cambio de región?' },
                          { id: 'lic', label: '¿Tiene licencia de conducir?' },
                          { id: 'veh', label: '¿Tiene vehículo propio?' },
                          { id: 'discapacidad', label: '¿Cuenta con alguna discapacidad?' }
                        ].map((item, idx) => (
                          <div key={item.id} className="availability-card p-3 rounded-xl border border-gray-100 bg-white shadow-sm flex flex-col gap-3">
                            <span className="text-[10px] font-bold text-gray-500 leading-tight h-8 flex items-center">{item.label}</span>
                            {item.id === 'discapacidad' && (
                              <p className="text-[8px] text-gray-400 italic leading-tight -mt-2">
                                Esta información es voluntaria y será utilizada únicamente para fines de inclusión laboral.
                              </p>
                            )}
                            <div className="flex gap-2">
                              <label className="availability-option flex-1">
                                <input 
                                  type="radio" 
                                  name={item.id} 
                                  onChange={() => item.id === 'discapacidad' && setHasDisability(true)}
                                  className="hidden-radio" 
                                />
                                <span className="option-pill font-bold">Sí</span>
                              </label>
                              <label className="availability-option flex-1">
                                <input 
                                  type="radio" 
                                  name={item.id} 
                                  defaultChecked={item.id !== 'res' && item.id !== 'veh'}
                                  onChange={() => item.id === 'discapacidad' && setHasDisability(false)}
                                  className="hidden-radio" 
                                />
                                <span className="option-pill font-bold">No</span>
                              </label>
                            </div>

                            {item.id === 'lic' && (
                              <div className="mt-2">
                                <label className="text-[9px] font-bold text-gray-400 block mb-1">Tipo de licencia</label>
                                <input type="text" className="form-input text-xs py-1.5" placeholder="Ej: B, A2, D..." />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {hasDisability && (
                        <div className="mt-6 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                          <p className="text-xs font-bold text-blue-900 mb-4">Si lo desea, indique el tipo de discapacidad:</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {disabilityOptions.map((type) => (
                              <label key={type} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl cursor-pointer hover:border-blue-300 transition-all shadow-sm">
                                <input 
                                  type="checkbox" 
                                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                                  checked={selectedDisabilities.includes(type)}
                                  onChange={() => toggleDisabilityType(type)}
                                />
                                <span className="text-[11px] font-medium text-gray-700">{type}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-footer">
                <button className="btn-save">Guardar cambios</button>
              </div>
            </div>

            {/* Section 2: Experiencia Laboral */}
            <div className="profile-section">
              <div className="section-header flex justify-between items-center">
                <h2 className="section-title">Experiencia Laboral</h2>
                <div className="flex items-center gap-4">
                  <button className="text-blue-500 flex items-center gap-1 text-xs font-bold hover:underline">
                    <Plus size={12} /> Agregar experiencia
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
                    <input type="text" className="form-input" placeholder="Año" maxLength="4" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Hasta (*)</label>
                    <div className="flex items-center gap-4">
                      <input type="text" className="form-input flex-1" placeholder="Año" maxLength="4" />
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
                <div className="history-list mt-10">
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
              <div className="section-footer">
                <button className="btn-save">Guardar cambios</button>
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
                    <label className="form-label">Carrera / Título</label>
                    <input type="text" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Año de Egreso</label>
                    <div className="flex items-center gap-4">
                      <input type="text" className="form-input flex-1" placeholder="Año" maxLength="4" />
                      <label className="flex items-center gap-1 text-[11px] whitespace-nowrap text-blue-600 font-bold">
                        <input type="checkbox" className="w-3 h-3" /> Actual
                      </label>
                    </div>
                  </div>
                </div>

                <div className="history-list mt-8">
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
              <div className="section-footer">
                <button className="btn-save">Guardar cambios</button>
              </div>
            </div>

            {/* Section 4: Habilidades */}
            <div className="profile-section">
              <div className="section-header">
                <h2 className="section-title">Conocimientos y Habilidades</h2>
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
              <div className="section-footer">
                <button className="btn-save">Guardar cambios</button>
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
                  <div className="form-group">
                    <label className="form-label">Empresa (*)</label>
                    <input type="text" className="form-input" />
                  </div>
                </div>
              </div>
              <div className="section-footer">
                <button className="btn-save">Guardar cambios</button>
              </div>
            </div>

            {/* Section 6: Documentos */}
            <div id="ver-cv" className="profile-section mb-24">
              <div className="section-header">
                <h2 className="section-title normal-case">Adjuntar documentos</h2>
              </div>
              <div className="section-content bg-white p-0">
                {/* CV Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 border-b border-gray-100 items-center">
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm mb-2">Subir currículum</h3>
                    <input 
                      type="file" 
                      onChange={(e) => handleFileChange('cv', e)}
                      className="text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-blue-600 file:text-white hover:file:bg-blue-700 border border-gray-100 p-2 w-full rounded-xl bg-gray-50/50" 
                    />
                    <p className="text-[10px] text-gray-400 mt-2 font-medium">Formatos válidos PDF o Word</p>
                  </div>
                  
                  <div className="h-full min-h-[80px]">
                    {files.cv ? (
                      <div className="p-4 bg-gray-50/50 rounded-xl border border-gray-100 flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                          <div className="bg-gray-200 p-2 rounded-lg text-gray-500">
                            <FileText size={18} />
                          </div>
                          <div>
                            <p className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Currículum Actual</p>
                            <p className="text-[11px] font-medium text-gray-600 truncate max-w-[200px]">{files.cv}</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => removeFile('cv')}
                          className="text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div className="h-full border-2 border-dashed border-gray-100 rounded-2xl flex items-center justify-center p-6 bg-gray-50/10">
                        <span className="text-xs text-gray-300 font-bold italic">El archivo aparecerá aquí al subirlo</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Other Documents Section */}
                {[1, 2, 3].map((num) => {
                  const fileKey = `extra${num}`;
                  return (
                    <div key={num} className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 border-b border-gray-100 items-center last:border-0">
                      <div>
                        <h3 className="font-bold text-gray-800 text-sm mb-2">Otro documento {num}</h3>
                        <input 
                          type="file" 
                          onChange={(e) => handleFileChange(fileKey, e)}
                          className="text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-gray-800 file:text-white hover:file:bg-black border border-gray-100 p-2 w-full rounded-xl bg-gray-50/50" 
                        />
                      </div>
                      
                      <div className="h-full min-h-[80px]">
                        {files[fileKey] ? (
                          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between group">
                            <div className="flex items-center gap-3">
                              <div className="bg-gray-200 p-2 rounded-lg text-gray-500">
                                <FileText size={18} />
                              </div>
                              <div>
                                <p className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Documento Adicional</p>
                                <p className="text-[11px] font-medium text-gray-600 truncate max-w-[200px]">{files[fileKey]}</p>
                              </div>
                            </div>
                            <button 
                              onClick={() => removeFile(fileKey)}
                              className="text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : (
                          <div className="h-full border-2 border-dashed border-gray-100 rounded-2xl flex items-center justify-center p-6 bg-gray-50/10">
                            <span className="text-xs text-gray-300 font-bold italic">Opcional</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="section-footer">
                <button className="btn-save">Guardar cambios</button>
              </div>
            </div>
            </div>
            )}

            {currentHash === '#favoritos' && (
            <div id="favoritos" style={{ width: '100%', maxWidth: '1024px', margin: '40px auto 120px auto' }}>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #f8fafc', borderRadius: '40px', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', boxShadow: '0 8px 30px rgba(0,0,0,0.02)' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#fef2f2', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444', marginBottom: '24px' }}>
                  <Heart size={28} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a', marginBottom: '8px' }}>Mis Favoritos</h3>
                <p style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '500', maxWidth: '300px', margin: '0 auto 32px auto' }}>Aquí aparecerán las empresas y ofertas que hayas marcado como favoritas.</p>

              </div>
            </div>
            )}

            {currentHash === '#habilidades' && (
            <div id="habilidades" style={{ width: '100%', maxWidth: '1024px', margin: '40px auto 120px auto' }}>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #f8fafc', borderRadius: '40px', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', boxShadow: '0 8px 30px rgba(0,0,0,0.02)' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#f0f9ff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0ea5e9', marginBottom: '24px' }}>
                  <Award size={28} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a', marginBottom: '8px' }}>Test y Habilidades</h3>
                <p style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '500', maxWidth: '300px', margin: '0 auto 32px auto' }}>Potencia tu perfil completando evaluaciones técnicas y psicolaborales.</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-blue-700 transition-colors">
                  Realizar primer test
                </button>
              </div>
            </div>
            )}

            {currentHash === '#guardadas' && (
            <div id="guardadas" style={{ width: '100%', maxWidth: '1024px', margin: '40px auto 120px auto' }}>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #f8fafc', borderRadius: '40px', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', boxShadow: '0 8px 30px rgba(0,0,0,0.02)', transition: 'box-shadow 0.3s ease', cursor: 'pointer' }}
                   onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.05)'}
                   onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.02)'}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#f8fafc', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f172a', marginBottom: '24px' }}>
                  <Bookmark size={28} strokeWidth={2} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a', marginBottom: '8px' }}>Ofertas Guardadas</h3>
                <p style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '500', maxWidth: '200px', margin: '0 auto 32px auto' }}>Aún no has guardado ninguna vacante para después.</p>

              </div>
            </div>
            )}

            {currentHash === '#mensajes' && (
            <div id="mensajes" style={{ width: '100%', maxWidth: '1024px', margin: '40px auto 120px auto' }}>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #f8fafc', borderRadius: '40px', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', boxShadow: '0 8px 30px rgba(0,0,0,0.02)', transition: 'box-shadow 0.3s ease', cursor: 'pointer' }}
                   onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.05)'}
                   onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.02)'}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#f8fafc', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f172a', marginBottom: '24px' }}>
                  <MessageSquare size={28} strokeWidth={2} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a', marginBottom: '8px' }}>Bandeja de Entrada</h3>
                <p style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '500', maxWidth: '200px', margin: '0 auto 32px auto' }}>No tienes mensajes nuevos de reclutadores actualmente.</p>
                <div style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0f172a' }}>
                  Configurar Notificaciones
                </div>
              </div>

            </div>
            )}

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PostulanteDashboard;
