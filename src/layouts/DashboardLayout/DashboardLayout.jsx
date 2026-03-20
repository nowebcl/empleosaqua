import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Bell, UserCircle, LogOut, Settings } from 'lucide-react';
import './DashboardLayout.css';

const DashboardLayout = ({ children, role, sidebarItems }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
            <h4 className="user-name">{role === 'postulante' ? 'Juan Pérez' : 'AquaCorp Ltda.'}</h4>
            <span className="user-role-badge">{role === 'postulante' ? 'Candidato' : 'Empresa'}</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-section-title">MENÚ PRINCIPAL</p>
          {sidebarItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link 
                key={index}
                to={item.path} 
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Icon size={18} className="nav-icon" />
                <span>{item.label}</span>
                {isActive && <motion.div layoutId="active-indicator" className="active-indicator" />}
              </Link>
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
            <button className="topbar-icon-btn notification-btn">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>
            <div className="topbar-user-menu desktop-only">
              <UserCircle size={24} className="text-gray-400" />
            </div>
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
