import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './InfoLaboral.css';

const blogPosts = [
  {
    id: 1,
    title: "Las 11 preguntas más comunes en una entrevista de trabajo (y cómo responder sin nervios)",
    excerpt: "Descubre las preguntas más frecuentes que realizan los reclutadores y aprende a estructurar tus respuestas para destacar tu potencial.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
    date: "05 Abr 2024",
    readTime: "8 min"
  },
  {
    id: 2,
    title: "Cómo vestir para una entrevista de trabajo: consejos para causar una excelente impresión",
    excerpt: "La imagen personal es clave. Te damos los mejores consejos según el sector y el tipo de empresa para proyectar profesionalismo.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    date: "02 Abr 2024",
    readTime: "5 min"
  },
  {
    id: 3,
    title: "Carta de solicitud de vacaciones: cómo redactarla bien y sin complicaciones legales",
    excerpt: "Aprende a escribir una solicitud de vacaciones clara y profesional siguiendo la normativa vigente en el código del trabajo.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    date: "28 Mar 2024",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "El currículum perfecto para el sector acuícola: qué destacar y qué omitir",
    excerpt: "Especializa tu perfil para la industria marítima. Tips sobre certificaciones y experiencias que los reclutadores de AQUA valoran hoy.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800",
    date: "20 Mar 2024",
    readTime: "10 min"
  },
  {
    id: 5,
    title: "Habilidades blandas: el factor decisivo en los procesos de selección actuales",
    excerpt: "Más allá del conocimiento técnico, la comunicación y el trabajo en equipo son las competencias más buscadas en los nuevos líderes.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    date: "15 Mar 2024",
    readTime: "7 min"
  },
  {
    id: 6,
    title: "Nuevas normativas laborales 2024: ¿Cómo afectan a los trabajadores en Chile?",
    excerpt: "Mantente al día con los cambios legislativos recientes y conoce tus derechos y deberes en el nuevo escenario laboral nacional.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    date: "10 Mar 2024",
    readTime: "12 min"
  }
];

const InfoLaboral = () => {
  return (
    <div className="app-container bg-[#fcfdfe]">
      <Header />
      
      <main className="info-laboral-page">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 px-4">
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#005B94', textShadow: 'none' }}>
              Información Laboral
            </h1>
          </div>

          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="blog-card"
              >
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-card-overlay">
                    <span className="blog-category">Consejos</span>
                  </div>
                </div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="meta-item"><Calendar size={14} /> {post.date}</span>
                    <span className="meta-item"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h2 className="blog-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <button className="blog-link">
                    Leer más <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InfoLaboral;
