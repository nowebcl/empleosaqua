import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, User, Building2, Search } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './FAQ.css';

const faqs = [
  {
    question: "¿Qué es www.empleosaqua.cl?",
    answer: "El portal EmpleosAqua funciona como un punto de conexión entre las empresas que están necesitando contratar personal y las personas que están buscando ofertas laborales. En esta plataforma, las empresas tienen la posibilidad de publicar las ofertas laborales y los postulantes, tienen la opción de postular a los avisos difundidos. Posteriormente, las empresas pueden contactar a los postulantes y continuar con sus procesos de selección.",
    category: "General"
  },
  {
    question: "¿El portal www.empleosaqua.cl participa en el proceso de selección?",
    answer: "No, el rol de www.empleosaqua.cl es servir como una plataforma para la comunicación entre los reclutadores y postulantes. El sitio presenta tableros de gestión, para los captadores del talento humano y para los postulantes, con el fin de que el encuentro sea más rápido y eficiente. Este portal, en ningún caso, formará parte de los proceso de selección de una compañía.",
    category: "General"
  },
  {
    question: "¿Cuánto tarda un aviso en ser publicado?",
    answer: "Los avisos son publicados de forma inmediata, una vez que han sido creados en el formulario correspondiente por el reclutador.",
    category: "Empresas"
  },
  {
    question: "¿Cuándo recibo la factura por los servicios adquiridos?",
    answer: "Una vez contratados los servicios y emitir el pago a nuestro favor, la gestión administrativa requiere 48-72 horas para verificarlo, registrar datos en los distintos sistemas y seguidamente, se realiza la debida facturación.",
    category: "Empresas"
  },
  {
    question: "Registro en www.empleosaqua.cl",
    answer: "Para los usuarios empresa y postulantes, la plataforma presenta la oportunidad de registrarse una sola vez. De esta manera, cuando los usuarios quieran ingresar al sitio, sólo deberán autentificarse con su correo electrónico y password. El sitio, además, presenta la posibilidad de ir modificando los datos de registro.",
    category: "General"
  },
  {
    question: "Mi empresa ya se encuentra registrada ¿Cuál es el motivo?",
    answer: "Si al momento de registrar tu empresa, te percatas de que ya está registrada, esto significa que alguien ya lo hizo. Es por ello, que solicitamos nos contactes con el fin de determinar si esto es correcto y presentarte otras alternativas de registro, el correo electrónico contacto es empleosaqua@b2bmg.cl.",
    category: "Empresas"
  },
  {
    question: "¿Cuántos tipos de aviso existen?",
    answer: "En www.empleosaqua.cl disponemos de dos tipos de avisos, “Básicos y Destacados”. Para ver la cantidad de avisos disponibles por cada plan a suscribir, por favor hacer click aquí.",
    category: "Empresas"
  },
  {
    question: "¿Cuánto tiempo permanece publicado un aviso en www.empleosaqua.cl?",
    answer: "La vigencia del aviso corresponde a 1 mes, lo más importante es recibir la mayor cantidad de curriculum por publicación, pudiendo eliminarse antes de ese período, si ya se seleccionó a un candidato para ocupar el cargo.",
    category: "Empresas"
  },
  {
    question: "¿Qué tipo de avisos no están permitidos?",
    answer: "Publicar avisos en www.empleosaqua.cl es la mejor herramienta existente en la actualidad para el sector acuícola y queremos que siga siendo así. Es por ello, si tu aviso tiene relación con servicios sexuales, promoción de productos o servicios específicos, negocios piramidales o multinivel, entre otros, estos serán eliminados.",
    category: "Empresas"
  },
  {
    question: "¿Puedo editar o eliminar un aviso ya publicado?",
    answer: "Si, hemos creado un tablero de administración de avisos, donde podrás ver tu publicación, modificarla, guardarla y eliminar la información que estimes conveniente.",
    category: "Empresas"
  },
  {
    question: "¿Cómo puedo crear mi currículum?",
    answer: "Para poder postular a los distintos avisos, tienes que registrarte y cargar tu currículum. Para eso, sigue los pasos en la sección de registro y completa los datos requeridos en cada campo. Entre más completo tengas tu perfil, más información valiosa le entregas a las empresas para que te contacten.",
    category: "Postulantes"
  },
  {
    question: "¿Qué hago si olvidé mi password?",
    answer: "Si al momento de autentificarte en el sitio, has olvidado tu password, haz click en el botón “Olvidaste tu contraseña” y en forma automática, te llegará un e-mail a la dirección que tengas registrada. Sigue las instrucciones para que puedas crear una nueva contraseña.",
    category: "General"
  },
  {
    question: "¿Cómo puedo postular a una oferta laboral?",
    answer: "Los avisos se publican en el home del sitio. De igual forma, puedes buscar con las palabras claves en el buscador o simplemente, desplegar todos los avisos. Para postular, lee con detalle la información del cargo y sus requerimientos, si consideras que te ajustas al perfil, haz click en “Postula Acá”. Una vez realizada la postulación, el reclutador recibirá los datos que hayas proporcionado en el formulario de creación de currículum.",
    category: "Postulantes"
  },
  {
    question: "¿Cómo puedo saber en qué estado está mi postulación?",
    answer: "Dentro de tu perfil, hemos creado un tablero de administración de postulaciones. En él, podrás ver toda la información referente a tus postulaciones.",
    category: "Postulantes"
  },
  {
    question: "¿Puedo contactar directamente a la empresa?",
    answer: "No, las empresas publican sus avisos y son ellas, quienes se van contactar directamente con los postulantes, si consideran que reúnen las especificaciones del cargo vacante.",
    category: "Postulantes"
  },
  {
    question: "¿De qué manera las empresas me contactarán?",
    answer: "Las empresas se contactan directamente con los postulantes a través de los datos de contacto que tú entregas (teléfono o correo electrónico). Así como también, a través del chat interno dispuesto en cada panel de gestión. Es por eso, que es muy importante que registres un e-mail que uses con regularidad y tu teléfono celular.",
    category: "Postulantes"
  },
  {
    question: "¿Quién puede ver mi currículum?",
    answer: "Tu información curricular será vista por el reclutador que publicó el aviso al cual postulaste.",
    category: "Postulantes"
  },
  {
    question: "¿Por qué las empresas no se contactan conmigo?",
    answer: "Puede ser que no hayas ingresado correctamente tus datos de contacto. También, existe la posibilidad que te postulaste al aviso, sin cumplir con el perfil del cargo.",
    category: "Postulantes"
  },
  {
    question: "¿Cómo puedo actualizar mi currículum?",
    answer: "En “Editar Perfil” podrás editar y cambiar todos los datos que ingresaste. Así como también, incorporar más información. Es indispensable, que mantengas al día tu currículum, bien sea porque cambiaste de empleo, realizaste algún tipo de capacitación o cambiaste tus datos de contacto. Las actualizaciones que hagas en tu perfil quedarán registradas de forma automática y estarán disponibles para ser vistas por las empresas desde el momento de la actualización, incluso para las empresas cuyo aviso ya has postulado con anterioridad.",
    category: "Postulantes"
  },
  {
    question: "¿Cómo puedo cargar mi currículum en formato Word y PDF?",
    answer: "Los campos que llenas al momento del registro es un resumen que le permite a las empresas, a través del tablero de administración de postulantes, ver la información de todos los postulantes. Pero, es importante que subas tu currículum en formato Word o PDF para que las empresas puedan acceder a toda la información laboral relevante. Para esto, en el formulario de registro existe una opción donde podrás cargarlo desde tu computador. El archivo que subas no puede pesar más de 2 MB.",
    category: "Postulantes"
  }
];

const FAQItem = ({ faq, isOpen, toggle }) => {
  return (
    <div className={`faq-card ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={toggle}>
        <span className="question-text">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="faq-icon-wrapper"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="faq-answer-wrapper"
          >
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = ["Todos", "Postulantes", "Empresas", "General"];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "Todos" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app-container bg-[#fcfdfe]">
      <Header />
      
      <main className="faq-page-content">
        <div className="container mx-auto px-6 py-32 max-w-4xl">
          
          <div className="text-center mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold text-[#005B94] mb-6 tracking-tight"
            >
              Preguntas Frecuentes
            </motion.h1>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(-1);
                }}
                className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="faq-list-minimal">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  faq={faq}
                  isOpen={openIndex === index}
                  toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                <HelpCircle size={48} className="mx-auto text-gray-200 mb-4" />
                <p className="text-gray-400">No encontramos resultados para tu búsqueda.</p>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
