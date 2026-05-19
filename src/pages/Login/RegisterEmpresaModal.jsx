import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './RegisterEmpresaModal.css';

const RegisterEmpresaModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    rut: '',
    cargo: '',
    contrasena: '',
    confirmarContrasena: '',
    newsletters: true
  });

  const [error, setError] = useState('');

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
    setError('');

    // Form validation
    if (formData.contrasena !== formData.confirmarContrasena) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Save company user registration in localStorage to pre-fill the profile later!
    const companyUser = {
      nombres: formData.nombre,
      apellidos: formData.apellido,
      email: formData.email,
      telefono: formData.telefono,
      rut: formData.rut,
      cargo: formData.cargo,
      contrasena: formData.contrasena
    };
    
    localStorage.setItem('registeredCompanyUser', JSON.stringify(companyUser));
    
    // Simulate successful registration
    setTimeout(() => {
      onClose();
    }, 800);
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
              <h2>Crea tu usuario y administra tus vacantes</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="register-modal-form">
              {error && <div className="register-error-msg">{error}</div>}
              
              <div className="form-row">
                <div className="form-group-modal">
                  <label>Nombre (*)</label>
                  <input 
                    type="text" 
                    name="nombre" 
                    value={formData.nombre} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group-modal">
                  <label>Apellido (*)</label>
                  <input 
                    type="text" 
                    name="apellido" 
                    value={formData.apellido} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group-modal">
                  <label>Email (*)</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group-modal">
                  <label>Teléfono (*)</label>
                  <input 
                    type="tel" 
                    name="telefono" 
                    value={formData.telefono} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group-modal">
                  <label>RUT del usuario (*)</label>
                  <input 
                    type="text" 
                    name="rut" 
                    value={formData.rut} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group-modal">
                  <label>Cargo (*)</label>
                  <input 
                    type="text" 
                    name="cargo" 
                    value={formData.cargo} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group-modal">
                  <label>Contraseña (*)</label>
                  <input 
                    type="password" 
                    name="contrasena" 
                    value={formData.contrasena} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group-modal">
                  <label>Confirmar Contraseña (*)</label>
                  <input 
                    type="password" 
                    name="confirmarContrasena" 
                    value={formData.confirmarContrasena} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
 
              <div className="register-terms">
                Al hacer clic en CREAR CUENTA, aceptas las Condiciones de uso y la Política de privacidad de Empleos Aqua
              </div>

              <div className="register-checkbox">
                <label>
                  <input 
                    type="checkbox" 
                    name="newsletters" 
                    checked={formData.newsletters} 
                    onChange={handleChange} 
                  />
                  Acepto recibir newsletters con novedades, promociones y actualizaciones.
                </label>
              </div>

              <div className="modal-buttons">
                <button type="button" className="btn-modal-cancel" onClick={onClose}>Cancelar</button>
                <button type="submit" className="btn-modal-submit">CREAR CUENTA</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RegisterEmpresaModal;
