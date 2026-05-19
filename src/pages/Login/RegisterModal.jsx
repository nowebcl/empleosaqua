import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './RegisterModal.css';

const RegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    rut: '',
    contrasena: '',
    newsletters: true
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful registration
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="register-modal-overlay" onClick={onClose}>
          <motion.div 
            className="register-modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="register-modal-close" onClick={onClose} aria-label="Cerrar">
              <X size={20} />
            </button>
            <div className="register-modal-header">
              <h2>Crea tu Perfil y únete a <span className="text-primary font-bold">Empleos Aqua</span></h2>
            </div>
            
            <form onSubmit={handleSubmit} className="register-modal-form">
              <div className="form-row">
                <div className="form-group-modal">
                  <label>Nombres(*)</label>
                  <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} required />
                </div>
                <div className="form-group-modal">
                  <label>Apellidos(*)</label>
                  <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group-modal">
                  <label>Email(*)</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group-modal">
                  <label>Teléfono(*)</label>
                  <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group-modal">
                  <label>Rut(*)</label>
                  <input type="text" name="rut" value={formData.rut} onChange={handleChange} required />
                </div>
                <div className="form-group-modal">
                  <label>Contraseña(*)</label>
                  <input type="password" name="contrasena" value={formData.contrasena} onChange={handleChange} required />
                </div>
              </div>

              <div className="register-terms">
                Al hacer clic en CREAR CUENTA, aceptas las <a href="#condiciones">Condiciones de uso</a> y la <a href="#privacidad">Política de privacidad</a> de Empleos Aqua
              </div>

              <div className="register-checkbox">
                <label>
                  <input 
                    type="checkbox" 
                    name="newsletters" 
                    checked={formData.newsletters} 
                    onChange={handleChange} 
                  />
                  Acepto recibir newsletters con novedades, promociones y actualizaciones
                </label>
              </div>

              <button type="submit" className="btn-register-submit">CREAR CUENTA</button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RegisterModal;
