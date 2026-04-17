import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
    setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="app-container bg-[#fcfdfe]">
      <Header />
      
      <main className="contacto-page-content">
        <div className="container mx-auto px-6 max-w-5xl">
          
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold text-[#005B94] mb-6 tracking-tight"
            >
              Contáctanos
            </motion.h1>
          </div>

          <div className="grid md:grid-cols-1 gap-12 max-w-2xl mx-auto">
            {/* Contact Form Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="contacto-card"
            >
              <form onSubmit={handleSubmit} className="contacto-form">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input 
                    type="text" 
                    id="nombre"
                    name="nombre"
                    placeholder="Nombres y apellidos"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      placeholder="Correo electrónico"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input 
                      type="tel" 
                      id="telefono"
                      name="telefono"
                      placeholder="+56 9..."
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="asunto">Asunto</label>
                  <input 
                    type="text" 
                    id="asunto"
                    name="asunto"
                    placeholder="Escribe el motivo de tu contacto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea 
                    id="mensaje"
                    name="mensaje"
                    rows="5"
                    placeholder="Escribe tu mensaje aquí..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-send">
                  <span>Enviar mensaje</span>
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>

          <div className="info-grid-row mt-16">
            <div className="info-item-horizontal">
              <div className="icon-box">
                <Phone size={18} />
              </div>
              <div className="text-left">
                <h3>Teléfono</h3>
                <p>(56-65) 247 0107</p>
              </div>
            </div>
            <div className="info-item-horizontal">
              <div className="icon-box">
                <Mail size={18} />
              </div>
              <div className="text-left">
                <h3>Email</h3>
                <p>empleosaqua@b2bmg.cl</p>
              </div>
            </div>
            <div className="info-item-horizontal">
              <div className="icon-box">
                <MapPin size={18} />
              </div>
              <div className="text-left">
                <h3>Ubicación</h3>
                <p>Puerto Montt, Chile</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
