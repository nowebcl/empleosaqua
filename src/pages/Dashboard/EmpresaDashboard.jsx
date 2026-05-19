import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Users, FilePlus2, Eye, Calendar, 
  MapPin, Clock, ArrowRight, TrendingUp, Download, Star,
  Briefcase, Bookmark, MessageSquare, Edit2, Plus, X, Upload, CheckCircle
} from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import './ProfileSections.css';

const SIDEBAR_ITEMS = [
  { label: 'Visión General', path: '#general', icon: TrendingUp },
  { label: 'Perfil de Empresa', path: '#perfil', icon: Building2 },
  { label: 'Publicar Oferta', path: '#publicar', icon: FilePlus2 },
  { label: 'Mis Avisos', path: '#avisos', icon: Building2 },
  { label: 'Candidatos', path: '#candidatos', icon: Users },
  { label: 'Mi Plan', path: '#plan', icon: Star },
];

const mock_jobs = [
  { id: 1, role: 'Técnico en Acuicultura Senior', applicants: 45, date: '12 Mar', expires: '12 Abr', status: 'activa', type: 'Destacado' },
  { id: 2, role: 'Operador ROV - Turno 14x14', applicants: 12, date: '10 Mar', expires: '10 Abr', status: 'activa', type: 'Normal' },
  { id: 3, role: 'Gerente Comercial', applicants: 89, date: '01 Feb', expires: '01 Mar', status: 'cerrada', type: 'Normal' },
];

const mock_candidates = [
  { id: 1, name: 'María González', role: 'Técnico en Acuicultura Senior', match: '95%', location: 'Puerto Montt' },
  { id: 2, name: 'Pedro Soto', role: 'Técnico en Acuicultura Senior', match: '88%', location: 'Chiloé' },
  { id: 3, name: 'Andrea Torres', role: 'Operador ROV - Turno 14x14', match: '92%', location: 'Punta Arenas' },
];

const EmpresaDashboard = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#general');

  // React to hash change for tab navigation
  useEffect(() => {
    const handleHash = () => {
      setCurrentHash(window.location.hash || '#general');
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Form states for the recruiter and company profile
  const [recruiterData, setRecruiterData] = useState({
    rut: '17247980-4',
    nombres: 'Ricardo',
    apellidos: 'Epuyao',
    email: 'esmeralalb@gmail.com',
    cargo: 'Ejecutivo Comercial',
    telefono: '965261088'
  });

  const [companyData, setCompanyData] = useState({
    rut: '772856520',
    razonSocial: 'B2B MEDIA GROUP SPA',
    nombreFantasia: 'Medios Aqua',
    giro: 'Edición de periódicos, revistas y publicaciones',
    direccion: 'Benavente 550, Piso 3, Oficina 305',
    comuna: 'Puerto Montt',
    ciudad: 'Puerto Montt',
    region: 'Los Lagos',
    email: 'yaponte@b2bmg.cl',
    telefono: '965261088'
  });

  const [logoFile, setLogoFile] = useState(null);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  // Load registered user or active session data if available
  useEffect(() => {
    const sessionUser = JSON.parse(localStorage.getItem('activeCompanyUser')) || 
                        JSON.parse(localStorage.getItem('registeredCompanyUser'));
    if (sessionUser) {
      setRecruiterData(prev => ({
        ...prev,
        rut: sessionUser.rut || prev.rut,
        nombres: sessionUser.nombres || prev.nombres,
        apellidos: sessionUser.apellidos || prev.apellidos,
        email: sessionUser.email || prev.email,
        cargo: sessionUser.cargo || prev.cargo,
        telefono: sessionUser.telefono || prev.telefono
      }));
    }
  }, []);

  const handleRecruiterChange = (e) => {
    const { name, value } = e.target;
    setRecruiterData(prev => ({ ...prev, [name]: value }));
  };

  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setCompanyData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0].name);
    }
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    
    // Save locally
    const updatedProfile = {
      recruiter: recruiterData,
      company: companyData,
      logo: logoFile
    };
    localStorage.setItem('companyProfile', JSON.stringify(updatedProfile));
    
    // Show success banner
    setShowSuccessMsg(true);
    setTimeout(() => {
      setShowSuccessMsg(false);
    }, 4000);
  };

  return (
    <DashboardLayout role="empresa" sidebarItems={SIDEBAR_ITEMS}>
      
      {/* 1. VISION GENERAL TAB */}
      {currentHash === '#general' && (
        <div className="flex flex-col gap-8">
          {/* CTA Banner */}
          <motion.div className="dash-card bg-[#0f172a] text-white flex justify-between items-center p-6 rounded-2xl" 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div>
              <h2 className="text-xl font-bold mb-2">Encuentra al talento acuícola ideal</h2>
              <p className="text-sm text-slate-300">Publica un aviso ahora y llega a más de 10,000 profesionales especializados.</p>
            </div>
            <button className="btn btn-primary flex items-center gap-2 px-6 rounded-lg py-2 font-bold bg-blue-600 hover:bg-blue-700"
              onClick={() => window.location.hash = '#publicar'}>
              <FilePlus2 size={18} /> Publicar Oferta
            </button>
          </motion.div>

          {/* Overview Metrics */}
          <div className="dash-grid dash-grid-stats grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: 'Avisos Activos', value: '2', icon: Building2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { label: 'Candidatos Nuevos', value: '24', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
              { label: 'Vistas Totales', value: '1,492', icon: Eye, color: 'text-purple-600', bg: 'bg-purple-50' },
              { label: 'CV Descargados', value: '18', icon: Download, color: 'text-amber-600', bg: 'bg-amber-50' },
            ].map((metric, i) => {
              const Icon = metric.icon;
              return (
                <motion.div key={i} className="dash-card metric-card bg-white p-5 rounded-2xl border border-slate-100 flex justify-between items-center shadow-sm" 
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.1 }}>
                  <div className="metric-info">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{metric.label}</h3>
                    <div className="metric-value text-2xl font-black text-slate-800">{metric.value}</div>
                  </div>
                  <div className={`p-3 rounded-xl ${metric.bg} ${metric.color}`}>
                    <Icon size={24} />
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="dash-grid dash-grid-main grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column (Jobs) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <motion.div className="dash-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <div className="dash-card-header flex justify-between items-center mb-4 pb-3 border-b border-slate-50">
                  <h3 className="dash-card-title text-base font-bold text-slate-800">Mis Avisos Publicados</h3>
                  <a href="#avisos" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">Ver todos</a>
                </div>
                <div className="overflow-x-auto">
                  <table className="dash-table w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-100 text-slate-400 text-xs font-bold uppercase">
                        <th className="pb-3">Cargo</th>
                        <th className="pb-3">Postulantes</th>
                        <th className="pb-3">Publicación</th>
                        <th className="pb-3">Estado</th>
                        <th className="pb-3">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {mock_jobs.map((job) => (
                        <tr key={job.id} className="text-slate-700 text-sm">
                          <td className="py-4">
                            <div className="font-semibold text-slate-800">{job.role}</div>
                            <div className="text-xs text-slate-500">{job.type}</div>
                          </td>
                          <td className="py-4 font-bold text-blue-600">{job.applicants}</td>
                          <td className="py-4 text-xs">{job.date}</td>
                          <td className="py-4">
                            <span className={`badge-status px-2 py-1 rounded text-xs font-bold status-${job.status}`}>
                              {job.status === 'activa' && 'Activa'}
                              {job.status === 'vencer' && 'Por Vencer'}
                              {job.status === 'cerrada' && 'Cerrada'}
                            </span>
                          </td>
                          <td className="py-4">
                            <div className="flex gap-2">
                              <button className="text-blue-600 hover:text-blue-800 p-1" title="Ver candidatos"><Eye size={18}/></button>
                              <button className="text-slate-600 hover:text-slate-800 p-1" title="Editar"><FilePlus2 size={18}/></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            {/* Right Column (Candidates) */}
            <motion.div className="dash-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <div className="dash-card-header mb-4 pb-3 border-b border-slate-50">
                <h3 className="dash-card-title text-base font-bold text-slate-800">Candidatos Recientes</h3>
              </div>
              <div className="flex flex-col gap-4">
                {mock_candidates.map((cand) => (
                  <div key={cand.id} className="border border-slate-100 p-4 rounded-xl hover:shadow-md transition-all bg-white relative">
                    <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      Match {cand.match}
                    </div>
                    <div className="flex gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                        {cand.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm leading-tight">{cand.name}</h4>
                        <p className="text-xs text-slate-500 truncate" style={{maxWidth: '180px'}}>{cand.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                      <MapPin size={12} /> {cand.location}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="py-1.5 text-[11px] font-bold bg-blue-50 text-blue-700 rounded transition-colors hover:bg-blue-100 flex items-center justify-center gap-1">
                        Ver Perfil
                      </button>
                      <button className="py-1.5 text-[11px] font-bold bg-slate-100 text-slate-700 rounded transition-colors hover:bg-slate-200 flex items-center justify-center gap-1">
                        Bajar CV
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-xs font-bold text-blue-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Ver Todos los Candidatos
              </button>
            </motion.div>
          </div>
        </div>
      )}

      {/* 2. PERFIL DE EMPRESA TAB - AS REQUESTED IN SCREENSHOT 3 */}
      {currentHash === '#perfil' && (
        <div className="profile-dashboard-layout">
          <div className="profile-container px-0 max-w-none">
            
            {showSuccessMsg && (
              <motion.div 
                className="w-full max-w-[1000px] mb-4 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3 shadow-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <CheckCircle size={20} className="text-emerald-600 shrink-0" />
                <span className="text-xs font-bold">¡Cambios guardados con éxito en el perfil de la empresa!</span>
              </motion.div>
            )}

            <form onSubmit={handleSaveProfile} className="w-full max-w-[1000px] flex flex-col gap-8">
              
              {/* SECTION A: Datos del reclutador */}
              <div className="profile-section">
                <div className="section-header">
                  <h2 className="section-title">Datos del reclutador</h2>
                </div>
                <div className="section-content">
                  <div className="form-grid">
                    <div className="form-group m-0">
                      <label className="form-label">RUT (*)</label>
                      <input 
                        type="text" 
                        name="rut"
                        className="form-input" 
                        value={recruiterData.rut}
                        onChange={handleRecruiterChange}
                        required 
                      />
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Nombres (*)</label>
                      <input 
                        type="text" 
                        name="nombres"
                        className="form-input" 
                        value={recruiterData.nombres}
                        onChange={handleRecruiterChange}
                        required 
                      />
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Apellidos (*)</label>
                      <input 
                        type="text" 
                        name="apellidos"
                        className="form-input" 
                        value={recruiterData.apellidos}
                        onChange={handleRecruiterChange}
                        required 
                      />
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Email (*)</label>
                      <input 
                        type="email" 
                        name="email"
                        className="form-input" 
                        value={recruiterData.email}
                        onChange={handleRecruiterChange}
                        required 
                      />
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Cargo (*)</label>
                      <input 
                        type="text" 
                        name="cargo"
                        className="form-input" 
                        value={recruiterData.cargo}
                        onChange={handleRecruiterChange}
                        required 
                      />
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Teléfono (*)</label>
                      <input 
                        type="text" 
                        name="telefono"
                        className="form-input" 
                        value={recruiterData.telefono}
                        onChange={handleRecruiterChange}
                        required 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION B: Completa la información de tu empresa */}
              <div className="profile-section mb-16">
                <div className="section-header">
                  <h2 className="section-title normal-case">Completa la información de tu empresa</h2>
                </div>
                <div className="section-content">
                  <div className="form-grid">
                    <div className="form-group m-0">
                      <label className="form-label">RUT de la Empresa (*)</label>
                      <input 
                        type="text" 
                        name="rut"
                        className="form-input" 
                        value={companyData.rut}
                        onChange={handleCompanyChange}
                        required 
                      />
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Razón Social (*)</label>
                      <input 
                        type="text" 
                        name="razonSocial"
                        className="form-input" 
                        value={companyData.razonSocial}
                        onChange={handleCompanyChange}
                        required 
                      />
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Nombre de Fantasía (*)</label>
                      <input 
                        type="text" 
                        name="nombreFantasia"
                        className="form-input" 
                        value={companyData.nombreFantasia}
                        onChange={handleCompanyChange}
                        required 
                      />
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Giro (*)</label>
                      <input 
                        type="text" 
                        name="giro"
                        className="form-input" 
                        value={companyData.giro}
                        onChange={handleCompanyChange}
                        required 
                      />
                    </div>
                    <div className="form-group-full m-0">
                      <label className="form-label">Dirección comercial (*)</label>
                      <input 
                        type="text" 
                        name="direccion"
                        className="form-input" 
                        value={companyData.direccion}
                        onChange={handleCompanyChange}
                        required 
                      />
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Comuna (*)</label>
                      <input 
                        type="text" 
                        name="comuna"
                        className="form-input" 
                        value={companyData.comuna}
                        onChange={handleCompanyChange}
                        required 
                      />
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Ciudad (*)</label>
                      <input 
                        type="text" 
                        name="ciudad"
                        className="form-input" 
                        value={companyData.ciudad}
                        onChange={handleCompanyChange}
                        required 
                      />
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Región (*)</label>
                      <input 
                        type="text" 
                        name="region"
                        className="form-input" 
                        value={companyData.region}
                        onChange={handleCompanyChange}
                        required 
                      />
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Email (*)</label>
                      <input 
                        type="email" 
                        name="email"
                        className="form-input" 
                        value={companyData.email}
                        onChange={handleCompanyChange}
                        required 
                      />
                    </div>
                    <div className="form-group m-0">
                      <label className="form-label">Teléfono (*)</label>
                      <input 
                        type="text" 
                        name="telefono"
                        className="form-input" 
                        value={companyData.telefono}
                        onChange={handleCompanyChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="font-bold text-gray-800 text-sm mb-2">Sube el logo de tu empresa</h3>
                        <input 
                          type="file" 
                          onChange={handleLogoChange}
                          className="text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#005B94] file:text-white hover:file:bg-[#004b7a] border border-gray-100 p-2 w-full rounded-xl bg-gray-50/50" 
                        />
                        <p className="text-[10px] text-gray-400 mt-2 font-medium">Formatos recomendados: PNG o JPG de alta resolución</p>
                      </div>
                      
                      <div className="min-h-[80px]">
                        {logoFile ? (
                          <div className="p-4 bg-gray-50/50 rounded-xl border border-gray-100 flex items-center justify-between group">
                            <div className="flex items-center gap-3">
                              <div className="bg-gray-200 p-2 rounded-lg text-gray-500">
                                <Building2 size={18} />
                              </div>
                              <div>
                                <p className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Logo Actual</p>
                                <p className="text-[11px] font-medium text-gray-600 truncate max-w-[200px]">{logoFile}</p>
                              </div>
                            </div>
                            <button 
                              type="button"
                              onClick={() => setLogoFile(null)}
                              className="text-gray-300 hover:text-red-500 transition-colors"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : (
                          <div className="h-full min-h-[80px] border-2 border-dashed border-gray-100 rounded-2xl flex items-center justify-center p-6 bg-gray-50/10">
                            <span className="text-xs text-gray-300 font-bold italic">El logo aparecerá aquí al subirlo</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section-footer">
                  <button type="submit" className="btn-save bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-xl">
                    Guardar los datos
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* 3. OTRAS SECCIONES AUXILIARES */}
      {currentHash === '#publicar' && (
        <div className="flex items-center justify-center p-12 bg-white border border-slate-100 rounded-2xl shadow-sm text-center">
          <div className="max-w-md">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl inline-flex mb-4">
              <FilePlus2 size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Publicar nueva oferta laboral</h3>
            <p className="text-xs text-slate-500 mb-6">Completa el formulario para publicar una vacante y llegar a miles de candidatos acuícolas.</p>
            <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-lg text-xs font-bold text-white">Comenzar publicación</button>
          </div>
        </div>
      )}

      {currentHash === '#avisos' && (
        <div className="flex items-center justify-center p-12 bg-white border border-slate-100 rounded-2xl shadow-sm text-center">
          <div className="max-w-md">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl inline-flex mb-4">
              <Building2 size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Gestión de Avisos</h3>
            <p className="text-xs text-slate-500 mb-6">Administra todas tus publicaciones de empleo activas, pausadas o cerradas.</p>
            <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-lg text-xs font-bold text-white">Ver mis 3 avisos</button>
          </div>
        </div>
      )}

      {currentHash === '#candidatos' && (
        <div className="flex items-center justify-center p-12 bg-white border border-slate-100 rounded-2xl shadow-sm text-center">
          <div className="max-w-md">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl inline-flex mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Buscador y Candidatos</h3>
            <p className="text-xs text-slate-500 mb-6">Revisa las postulaciones recibidas y busca perfiles calificados en nuestra base de datos.</p>
            <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-lg text-xs font-bold text-white">Ver postulaciones</button>
          </div>
        </div>
      )}

      {currentHash === '#plan' && (
        <div className="flex items-center justify-center p-12 bg-white border border-slate-100 rounded-2xl shadow-sm text-center">
          <div className="max-w-md">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl inline-flex mb-4">
              <Star size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Mi suscripción y planes</h3>
            <p className="text-xs text-slate-500 mb-6">Estás suscrito al plan **Aqua Destacado** con publicaciones ilimitadas.</p>
            <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-lg text-xs font-bold text-white">Gestionar facturación</button>
          </div>
        </div>
      )}

    </DashboardLayout>
  );
};

export default EmpresaDashboard;
