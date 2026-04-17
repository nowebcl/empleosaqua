import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Bell, UserCircle, LogOut, Settings, ChevronDown } from 'lucide-react';
import './DashboardLayout.css';

const DashboardLayout = ({ children, role, sidebarItems }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard-wrapper">
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="sidebar-overlay"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo-link">
            <img src="/logo.png" alt="EmpleosAqua" className="sidebar-logo" />
          </Link>
          <button className="mobile-close-btn" onClick={() => setIsSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="sidebar-user-info">
          <div className="user-avatar">
            <UserCircle size={32} />
          </div>
          <div className="user-details">
            <h4 className="user-name">{role === 'postulante' ? 'Frainibel Sanchez' : 'AquaCorp Ltda.'}</h4>
            <span className="user-role-badge">{role === 'postulante' ? 'Candidato' : 'Empresa'}</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-section-title">MENÚ PRINCIPAL</p>
          {sidebarItems.map((item, index) => {
            const isActive = item.path.startsWith('#') 
              ? location.hash === item.path 
              : location.pathname === item.path;
            const Icon = item.icon;
            return (
              <a 
                key={index}
                href={item.path} 
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Icon size={18} className="nav-icon" />
                <span>{item.label}</span>
                {isActive && <motion.div layoutId="active-indicator" className="active-indicator" />}
              </a>
            )
          })}
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item">
            <Settings size={18} className="nav-icon" />
            <span>Configuración</span>
          </button>
          <button className="nav-item text-danger" onClick={handleLogout}>
            <LogOut size={18} className="nav-icon" />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="dashboard-main">
        {/* Topbar */}
        <header className="dashboard-topbar">
          <div className="topbar-left">
            <button className="mobile-menu-btn" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <h2 className="topbar-title">Panel de Control</h2>
          </div>
          
          <div className="topbar-right">
            {role === 'postulante' ? (
              <div className="dashboard-top-nav desktop-only">
                <Link to="#postulaciones" className="dash-nav-link">Mis Postulaciones</Link>
                <Link to="#favoritos" className="dash-nav-link">Mis Favoritos</Link>
                <Link to="#ver-cv" className="dash-nav-link">Ver mi CV</Link>
                <Link to="#test" className="dash-nav-link">Test y habilidades</Link>
                    <div className="flex items-center gap-3">
                      {/* Minimalist Notification Bell Emoji */}
                      <div className="relative">
                        <button 
                          className="text-lg hover:scale-110 transition-transform cursor-pointer"
                          onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                          title="Notificaciones"
                        >
                          🔔
                        </button>
                        
                        <AnimatePresence>
                          {isNotificationsOpen && (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.9, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.9, y: 10 }}
                              className="absolute top-full right-0 mt-4 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50"
                            >
                              <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest text-center">No tienes notificaciones</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="user-dropdown-container relative border-l pl-3 border-gray-100">
                        <button 
                          className="user-dropdown-trigger flex items-center gap-2 group"
                          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        >
                          <span className="font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors">Frainibel Sanchez</span>
                          <ChevronDown size={14} className={`text-gray-400 transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                          {isUserMenuOpen && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className="user-menu-dropdown"
                            >
                              <div className="dropdown-header border-b border-gray-100 pb-2 mb-2">
                                <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">Opciones</p>
                              </div>
                              <button className="dropdown-item group">
                                <UserCircle size={16} className="group-hover:text-blue-600" />
                                <span>Modificar perfil</span>
                              </button>
                              <button className="dropdown-item text-danger group" onClick={handleLogout}>
                                <LogOut size={16} className="group-hover:scale-110" />
                                <span>Cerrar Sesión</span>
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
              </div>
            ) : (
              <>
                <button className="topbar-icon-btn notification-btn">
                  <Bell size={20} />
                  <span className="notification-badge">3</span>
                </button>
                <div className="topbar-user-menu desktop-only">
                  <UserCircle size={24} className="text-gray-400" />
                </div>
              </>
            )}
            
            <button className="topbar-icon-btn mobile-only">
              <Bell size={20} />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="dashboard-content">
          <div className="dashboard-content-inner">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
