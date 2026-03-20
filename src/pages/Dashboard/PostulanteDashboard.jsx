import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, FileText, Bookmark, MessageSquare, 
  MapPin, Clock, ArrowRight, CheckCircle, TrendingUp
} from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';

const SIDEBAR_ITEMS = [
  { label: 'Mi Resumen', path: '/dashboard/postulante', icon: TrendingUp },
  { label: 'Mi Perfil & CV', path: '#perfil', icon: FileText },
  { label: 'Mis Postulaciones', path: '#postulaciones', icon: Briefcase },
  { label: 'Ofertas Guardadas', path: '#guardadas', icon: Bookmark },
  { label: 'Mensajes', path: '#mensajes', icon: MessageSquare },
];

const mock_applications = [
  { id: 1, role: 'Técnico Acuícola Junior', company: 'Salmones Mar Sur', date: '15 Mar 2026', status: 'enviada' },
  { id: 2, role: 'Analista de Calidad', company: 'AquaFoods Global', date: '12 Mar 2026', status: 'revision' },
  { id: 3, role: 'Buzo Comercial', company: 'Servicios Submarinos Spa', date: '05 Mar 2026', status: 'contactado' },
];

const mock_recommendations = [
  { id: 1, role: 'Jefe de Centro - Cultivo', company: 'AquaCulture Pro', location: 'Puerto Montt', type: 'Full-time', badge: 'Destacada' },
  { id: 2, role: 'Operario de Planta', company: 'Seafood Express', location: 'Chiloé, Quellón', type: 'Turnos', badge: 'Nuevo' },
];

const PostulanteDashboard = () => {
  return (
    <DashboardLayout role="postulante" sidebarItems={SIDEBAR_ITEMS}>
      
      {/* Welcome Alert / Profile Completion */}
      <motion.div className="dash-card bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-100 flex justify-between items-center" 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-1">¡Hola Juan! Tu perfil está al 75%</h2>
          <p className="text-sm text-slate-600">Completa tu formación académica para que las empresas te encuentren más rápido.</p>
        </div>
        <button className="btn btn-primary btn-sm flex items-center gap-2">
          Completar Perfil <ArrowRight size={16} />
        </button>
      </motion.div>

      {/* Overview Metrics */}
      <div className="dash-grid dash-grid-stats">
        {[
          { label: 'Postulaciones', value: '12', icon: Briefcase, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Ofertas Guardadas', value: '8', icon: Bookmark, color: 'text-purple-500', bg: 'bg-purple-50' },
          { label: 'Apariciones en Búsqueda', value: '45', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { label: 'Mensajes Nuevos', value: '2', icon: MessageSquare, color: 'text-amber-500', bg: 'bg-amber-50' },
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
              <h3 className="dash-card-title">Mis Postulaciones Recientes</h3>
              <a href="#ver-todas" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">Ver todas</a>
            </div>
            <div className="overflow-x-auto">
              <table className="dash-table">
                <thead>
                  <tr>
                    <th>Cargo Postulado</th>
                    <th>Empresa</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {mock_applications.map((app) => (
                    <tr key={app.id}>
                      <td className="font-medium">{app.role}</td>
                      <td>{app.company}</td>
                      <td>{app.date}</td>
                      <td>
                        <span className={`badge-status status-${app.status}`}>
                          {app.status === 'enviada' && 'Enviada'}
                          {app.status === 'revision' && 'En revisión'}
                          {app.status === 'contactado' && 'Contactado'}
                        </span>
                      </td>
                      <td><button className="btn-action">Ver detalle</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div className="dash-card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <div className="dash-card-header">
              <h3 className="dash-card-title">Mis Accesos Rápidos</h3>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Actualizar CV', icon: FileText, color: 'text-orange-500' },
                { title: 'Test de Inglés', icon: CheckCircle, color: 'text-indigo-500' },
                { title: 'Prácticas', icon: Bookmark, color: 'text-green-500' },
                { title: 'Buscar Ofertas', icon: Briefcase, color: 'text-teal-500' },
              ].map((btn, i) => (
                <button key={i} className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all group">
                  <div className={`${btn.color} group-hover:scale-110 transition-transform`}>
                    <btn.icon size={28} />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{btn.title}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div className="dash-card" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
          <div className="dash-card-header">
            <h3 className="dash-card-title">Ofertas Sugeridas</h3>
          </div>
          <div className="flex flex-col gap-4">
            {mock_recommendations.map((rec) => (
              <div key={rec.id} className="border border-slate-100 p-4 rounded-xl hover:shadow-md transition-shadow cursor-pointer bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-slate-800 leading-tight">{rec.role}</h4>
                  <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-1 rounded">{rec.badge}</span>
                </div>
                <p className="text-sm text-slate-500 font-medium mb-3">{rec.company}</p>
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {rec.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {rec.type}</span>
                </div>
                <button className="w-full py-2 text-sm font-semibold border-t border-slate-100 text-blue-600 hover:bg-slate-50 rounded-b-lg transition-colors">
                  Ver Oferta
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
    </DashboardLayout>
  );
};

export default PostulanteDashboard;
