import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

            {/* Section 6: Documentos - RE-DESIGNED TO BE MORE "PRO" */}
            <div className="profile-section border-0 shadow-2xl shadow-blue-900/5">
              <div className="section-header py-8 bg-gradient-to-r from-blue-50/50 to-white flex justify-between items-center border-b border-gray-100">
                <div>
                  <h2 className="section-title text-2xl text-blue-900 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                      <FileText size={20} />
                    </div>
                    Gestión de Currículum y Documentos
                  </h2>
                  <p className="text-xs text-gray-400 font-medium mt-1 ml-13">Mantén tu información actualizada para atraer mejores empresas</p>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-primary flex items-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg px-6 rounded-full text-xs font-bold">
                    <Download size={14} /> PDF
                  </button>
                  <button className="btn btn-outline flex items-center gap-2 border-gray-200 text-gray-600 hover:bg-gray-50 rounded-full text-xs font-bold">
                    <Download size={14} /> WORD
                  </button>
                </div>
              </div>

              <div className="section-content p-8 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                  {/* MAIN CV CARD - LARGER AND MORE "PRO" */}
                  <div className="lg:col-span-1 flex flex-col gap-4">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative border border-blue-100 p-8 rounded-3xl bg-white shadow-sm flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1">
                        <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                          <FileText size={40} />
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 mb-1">Currículum Principal</h4>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-6">Documento Requerido (*)</p>
                        
                        {files.cv ? (
                          <div className="w-full bg-blue-50/50 p-4 rounded-2xl border border-blue-100 flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-[10px] font-bold">PDF</div>
                            <span className="text-[11px] text-blue-900 font-bold truncate flex-1">{files.cv}</span>
                            <button onClick={() => removeFile('cv')} className="text-red-400 hover:text-red-600 transition-colors p-1"><Trash2 size={16} /></button>
                          </div>
                        ) : (
                          <div className="w-full space-y-3">
                            <input type="file" className="hidden" id="file-cv" onChange={(e) => handleFileChange('cv', e)} />
                            <label htmlFor="file-cv" className="block w-full py-4 bg-blue-600 text-white rounded-2xl text-[11px] font-black uppercase tracking-wider cursor-pointer hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30">
                              Subir mi CV
                            </label>
                            <p className="text-[10px] text-gray-400">Archivos permitidos: PDF, DOC, DOCX</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-6 rounded-3xl bg-gray-50/50 border border-gray-100 flex flex-col items-center text-center">
                      <h5 className="text-[11px] font-bold text-gray-500 mb-3">¿NO TIENES UN CURRÍCULUM?</h5>
                      <button className="w-full py-3 border-2 border-blue-600 text-blue-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                        <Edit2 size={14} /> Crear CV Online
                      </button>
                      <p className="text-[9px] text-gray-400 mt-3 leading-relaxed">Usa nuestra herramienta inteligente para generar un perfil profesional en minutos.</p>
                    </div>
                  </div>

                  {/* SECONDARY DOCUMENTS GRID */}
                  <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: 'extra1', label: 'Certificados de Título', subtitle: 'Acredita tu formación', icon: Award },
                      { id: 'extra2', label: 'Capacitaciones', subtitle: 'Cursos y normativas', icon: Shield },
                      { id: 'extra3', label: 'Antecedentes', subtitle: 'Certificado oficial', icon: Check }
                    ].map((doc) => (
                      <div key={doc.id} className="p-6 rounded-3xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-lg transition-all flex flex-col gap-4 group">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                            <doc.icon size={20} />
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-gray-800 uppercase tracking-tight">{doc.label}</h5>
                            <p className="text-[10px] text-gray-400">{doc.subtitle}</p>
                          </div>
                        </div>

                        {files[doc.id] ? (
                          <div className="flex items-center gap-3 bg-blue-50/30 p-2 rounded-xl border border-blue-100">
                            <span className="text-[10px] text-blue-700 font-bold truncate flex-1">{files[doc.id]}</span>
                            <button onClick={() => removeFile(doc.id)} className="text-red-400 hover:text-red-600 transition-colors p-1"><X size={16} /></button>
                          </div>
                        ) : (
                          <div className="mt-auto">
                            <input type="file" className="hidden" id={`file-${doc.id}`} onChange={(e) => handleFileChange(doc.id, e)} />
                            <label htmlFor={`file-${doc.id}`} className="block w-full py-2 bg-gray-50 text-gray-500 rounded-xl text-[10px] font-bold text-center cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all">
                              AGREGAR
                            </label>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Placeholder for more */}
                    <div className="p-6 rounded-3xl border-2 border-dashed border-gray-100 flex flex-col items-center justify-center text-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                      <Plus size={24} className="text-gray-300 mb-2" />
                      <span className="text-[10px] font-bold text-gray-400 uppercase">Añadir Otro</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-900 rounded-2xl p-6 text-white flex justify-between items-center shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <TrendingUp size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-bold">Índice de completitud</h4>
                      <p className="text-xs text-white/60">¡Casi listo! Solo faltan las referencias para llegar al 100%.</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-cyan-400">85%</div>
                    <div className="w-32 h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                      <div className="w-[85%] h-full bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
