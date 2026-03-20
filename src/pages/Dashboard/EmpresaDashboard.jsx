import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Users, FilePlus2, Eye, Calendar, 
  MapPin, Clock, ArrowRight, TrendingUp, Download, Star
} from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';

const SIDEBAR_ITEMS = [
  { label: 'Visión General', path: '/dashboard/empresa', icon: TrendingUp },
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
  return (
    <DashboardLayout role="empresa" sidebarItems={SIDEBAR_ITEMS}>
      
      {/* CTA Banner */}
      <motion.div className="dash-card bg-[#0f172a] text-white flex justify-between items-center" 
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div>
          <h2 className="text-xl font-bold mb-2">Encuentra al talento acuícola ideal</h2>
          <p className="text-sm text-slate-300">Publica un aviso ahora y llega a más de 10,000 profesionales especializados.</p>
        </div>
        <button className="btn btn-primary flex items-center gap-2 px-6">
          <FilePlus2 size={18} /> Publicar Oferta
        </button>
      </motion.div>

      {/* Overview Metrics */}
      <div className="dash-grid dash-grid-stats">
        {[
          { label: 'Avisos Activos', value: '2', icon: Building2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Candidatos Nuevos', value: '24', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Vistas Totales', value: '1,492', icon: Eye, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'CV Descargados', value: '18', icon: Download, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((metric, i) => {
          const Icon = metric.icon;
          return (
            <motion.div key={i} className="dash-card metric-card" 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.1 }}>
              <div className="metric-info">
                <h3>{metric.label}</h3>
                <div className="metric-value">{metric.value}</div>
              </div>
              <div className={`p-3 rounded-lg ${metric.bg} ${metric.color}`}>
                <Icon size={24} />
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="dash-grid dash-grid-main">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <motion.div className="dash-card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <div className="dash-card-header">
              <h3 className="dash-card-title">Mis Avisos Publicados</h3>
              <a href="#ver-todos" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">Ver todos</a>
            </div>
            <div className="overflow-x-auto">
              <table className="dash-table">
                <thead>
                  <tr>
                    <th>Cargo</th>
                    <th>Postulantes</th>
                    <th>Publicación</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {mock_jobs.map((job) => (
                    <tr key={job.id}>
                      <td>
                        <div className="font-semibold text-slate-800">{job.role}</div>
                        <div className="text-xs text-slate-500">{job.type}</div>
                      </td>
                      <td className="font-bold text-blue-600">{job.applicants}</td>
                      <td className="text-sm">{job.date}</td>
                      <td>
                        <span className={`badge-status status-${job.status}`}>
                          {job.status === 'activa' && 'Activa'}
                          {job.status === 'vencer' && 'Por Vencer'}
                          {job.status === 'cerrada' && 'Cerrada'}
                        </span>
                      </td>
                      <td>
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

        {/* Right Column */}
        <motion.div className="dash-card" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
          <div className="dash-card-header mb-4">
            <h3 className="dash-card-title">Candidatos Recientes</h3>
          </div>
          <div className="flex flex-col gap-4">
            {mock_candidates.map((cand) => (
              <div key={cand.id} className="border border-slate-100 p-4 rounded-xl hover:shadow-md transition-shadow bg-white relative">
                <div className="absolute top-4 right-4 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-md">
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
                  <button className="py-1.5 text-xs font-semibold bg-blue-50 text-blue-700 rounded transition-colors hover:bg-blue-100 flex items-center justify-center gap-1">
                    <UserCircle size={14} /> Ver Perfil
                  </button>
                  <button className="py-1.5 text-xs font-semibold bg-slate-100 text-slate-700 rounded transition-colors hover:bg-slate-200 flex items-center justify-center gap-1">
                    <Download size={14} /> Bajar CV
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-sm font-semibold text-blue-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            Ver Todos los Candidatos
          </button>
        </motion.div>

      </div>
    </DashboardLayout>
  );
};

export default EmpresaDashboard;
