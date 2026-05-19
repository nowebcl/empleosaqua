import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, History, Target, Briefcase } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Nosotros.css';

const Nosotros = () => {
  const sections = [
    {
      icon: <Globe2 size={24} className="text-[#005B94]" />,
      title: "Identidad Corporativa",
      content: "“EmpleosAqua” es una iniciativa de B2B Group Media SPA, casa editorial de la revista AQUA y del portal www.aqua.cl. Nos hemos propuesto convertirnos en la plataforma de empleo líder en el sector acuícola pesquero nacional y de otros sectores productivos, ofreciendo un eficiente punto de encuentro entre empleadores y potenciales trabajadores."
    },
    {
      icon: <History size={24} className="text-[#005B94]" />,
      title: "Trayectoria y Experiencia",
      content: "Este proyecto nace con el propósito de mejorar la tradicional bolsa de trabajo del portal www.aqua.cl. La cual, por más de diez años, prestó un importante servicio a la comunidad acuícola pesquera local, convirtiéndose en una potente herramienta en términos de búsqueda y oferta de empleos. Especialmente, en la región sur del país."
    },
    {
      icon: <Target size={24} className="text-[#005B94]" />,
      title: "Misión Renovada",
      content: "Presentamos el portal laboral totalmente renovado, donde esperamos prestar un servicio de alta calidad que se adecue a las necesidades de empresas y trabajadores que necesitan entrar en conexión."
    },
    {
      icon: <Briefcase size={24} className="text-[#005B94]" />,
      title: "Nuestro Compromiso",
      content: "Esta nueva plataforma es una apuesta más de B2B Group Media SPA, y su división AQUA, por seguir apoyando y acompañando el desarrollo productivo. Estamos confiados que será ampliamente aprovechada por quienes componen estos sectores."
    }
  ];

  return (
    <div className="app-container bg-[#fcfdfe]">
      <Header />
      
      <main className="nosotros-structured">
        <section className="container mx-auto px-6 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* Main Header */}
            <header className="text-center mb-24">
              <h1 className="text-4xl font-bold text-[#005B94] tracking-tight">Quiénes somos</h1>
              <div className="mt-4 w-16 h-1 bg-[#005B94] mx-auto rounded-full opacity-30"></div>
            </header>

            {/* Structured Content Grid */}
            <div className="grid gap-16">
              {sections.map((section, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="section-item flex items-start gap-8"
                >
                  <div className="hidden sm:flex flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm items-center justify-center border border-gray-100">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <div className="footer-spacer bg-[#fcfdfe] h-32 w-full"></div>
      <Footer />
    </div>
  );
};

export default Nosotros;
