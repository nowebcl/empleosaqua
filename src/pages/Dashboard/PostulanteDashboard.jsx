import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, FileText, Bookmark, MessageSquare, 
  MapPin, Clock, ArrowRight, CheckCircle, TrendingUp,
  User, Camera, Plus, Calendar, X, Edit2, Download, Trash2,
  Linkedin, Facebook, Instagram, Twitter, HelpCircle
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
                    <div className="form-group-full border-t border-gray-50 pt-4 mt-2">
                      <label className="form-label mb-4 text-gray-800 font-bold uppercase tracking-wider text-[10px]">Movilidad y Disponibilidad</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="text-xs font-medium">¿Tengo disponibilidad?</span>
                          <div className="flex gap-3">
                            <label className="flex items-center gap-1 text-[11px]"><input type="radio" name="disp" defaultChecked /> Sí</label>
                            <label className="flex items-center gap-1 text-[11px]"><input type="radio" name="disp" /> No</label>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="text-xs font-medium">Disponibilidad para cambio de residencia</span>
                          <div className="flex gap-3">
                            <label className="flex items-center gap-1 text-[11px]"><input type="radio" name="res" /> Sí</label>
                            <label className="flex items-center gap-1 text-[11px]"><input type="radio" name="res" defaultChecked /> No</label>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="text-xs font-medium">Licencia de conducir</span>
                          <div className="flex gap-3">
                            <label className="flex items-center gap-1 text-[11px]"><input type="radio" name="lic" defaultChecked /> Sí</label>
                            <label className="flex items-center gap-1 text-[11px]"><input type="radio" name="lic" /> No</label>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <span className="text-xs font-medium">Vehículo propio</span>
                          <div className="flex gap-3">
                            <label className="flex items-center gap-1 text-[11px]"><input type="radio" name="veh" defaultChecked /> Sí</label>
                            <label className="flex items-center gap-1 text-[11px]"><input type="radio" name="veh" /> No</label>
                          </div>
                        </div>
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

            {/* Section 6: Documentos */}
            <div className="profile-section border-2 border-blue-50">
              <div className="section-header py-6 bg-blue-50/30 flex justify-between items-center">
                <div>
                  <h2 className="section-title text-blue-900">Gestión de Documentos y CV</h2>
                  <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest mt-1">Completa tu perfil para destacar</p>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-primary flex items-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg px-6">
                    <Download size={16} /> DESCARGAR PDF
                  </button>
                  <button className="btn btn-outline flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Download size={16} /> Word
                  </button>
                </div>
              </div>
              <div className="section-content p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {[
                    { label: 'Currículum Vitae (*)', icon: FileText },
                    { label: 'Certificado de Título', icon: Plus },
                    { label: 'Certificado de Antecedentes', icon: Plus },
                    { label: 'Documento Adicional 1', icon: Plus },
                  ].map((doc, i) => (
                    <div key={i} className="border-2 border-dashed border-gray-100 p-6 rounded-2xl hover:border-blue-200 transition-colors bg-gray-50/50 flex flex-col items-center text-center group">
                      <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-500 mb-3 group-hover:scale-110 transition-transform">
                        <doc.icon size={20} />
                      </div>
                      <span className="text-xs font-bold text-gray-700 mb-4">{doc.label}</span>
                      
                      {i === 0 ? (
                        <div className="flex items-center gap-4 w-full">
                          <span className="text-[10px] text-blue-600 font-medium truncate flex-1">cv_frainibel_sanchez_2026.pdf</span>
                          <button className="text-red-400 hover:text-red-600 p-1"><X size={16} /></button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <input type="file" className="hidden" id={`file-${i}`} />
                          <label htmlFor={`file-${i}`} className="text-[10px] font-black text-blue-500 border-2 border-blue-500 px-4 py-1.5 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white transition-all">
                            SELECCIONAR ARCHIVO
                          </label>
                        </div>
                      )}
                    </div>
                  ))}
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
          <div className="sticky top-24">
            <div className="help-card bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-2 text-amber-700 mb-4">
                <HelpCircle size={20} />
                <h4 className="font-bold text-sm">Consejos para tu CV</h4>
              </div>
              <ul className="text-xs text-amber-800/80 space-y-4">
                <li className="flex gap-3">
                  <span className="font-bold text-amber-500">01</span>
                  <span><strong>Sé específico</strong> en tus funciones del cargo. Usa verbos de acción como "Lideré", "Coordiné", "Gestioné".</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-amber-500">02</span>
                  <span><strong>Mantén tus datos actualizados</strong>. Las empresas priorizan los perfiles que han registrado actividad reciente.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-amber-500">03</span>
                  <span><strong>Referencias locales</strong>: En el sector acuícola, las recomendaciones directas son muy valoradas.</span>
                </li>
              </ul>
            </div>

            <div className="help-card bg-blue-50 border border-blue-100 rounded-2xl p-6">
               <h4 className="font-bold text-blue-900 text-sm mb-2">Visibilidad del Perfil</h4>
               <p className="text-[10px] text-blue-800/70 mb-4 leading-relaxed">Tu perfil es visible para todas las empresas de la plataforma AquaCorp.</p>
               <button className="w-full py-2 bg-blue-900 text-white rounded-xl text-xs font-bold hover:bg-blue-800 transition-colors">
                 Vista Previa Pública
               </button>
            </div>
          </div>
        </aside>

      </div>
    </DashboardLayout>
  );
};

export default PostulanteDashboard;
