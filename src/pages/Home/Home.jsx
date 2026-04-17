import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import QuickActions from '../../components/QuickActions/QuickActions';
import Stats from '../../components/Stats/Stats';
import FeaturedJobs from '../../components/FeaturedJobs/FeaturedJobs';
import Institutional from '../../components/Institutional/Institutional';
import Footer from '../../components/Footer/Footer';
import '../../App.css'; // Global App styles

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const VerticalPromo = ({ src, href, alt }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full transition-opacity hover:opacity-90">
      <img src={src} alt={alt} className="w-full h-auto object-contain rounded-lg" />
    </a>
  );

  return (
    <div className="app-container">
      <Header />
      <main className="w-full relative">
        <Hero />
        
        {/* Layout Principal: 3 Columnas (Banner L - Contenido - Banner R) */}
        <div className="w-full max-w-[1550px] mx-auto flex items-start justify-center relative px-1 lg:px-2">
          
          {/* Publicidad Lateral Izquierda */}
          <div className="premium-side-ad side-ad-left">
            <VerticalPromo 
              src="https://tpc.googlesyndication.com/simgad/4141843103343703535" 
              href="https://www.aqua-forum.cl/" 
              alt="Publicidad Skyscraper Izquierda" 
            />
          </div>

          {/* Contenido Central */}
          <div className="flex-1 w-full max-w-[1000px] main-content-mobile-fix">
            {/* Publicidad: Banner horizontal superior */}
            <div className="w-full px-2 lg:px-4 mt-4 lg:mt-6 mb-4">
              <VerticalPromo 
                src="https://tpc.googlesyndication.com/simgad/8863766421333283423" 
                href="https://www.linkedin.com/company/ddconsultingchile/posts/?feedView=all" 
                alt="DD Reclutamiento y Selección" 
              />
            </div>

            {/* Main Content Sections */}
            <div className="w-full px-2 lg:px-8 flex flex-col gap-8 lg:gap-16">
              <QuickActions />
              <FeaturedJobs />
              <Institutional />
              <Stats />
            </div>
          </div>

          {/* Publicidad Lateral Derecha */}
          <div className="premium-side-ad side-ad-right">
            <VerticalPromo 
              src="https://tpc.googlesyndication.com/simgad/18162141951724842782" 
              href="https://www.aqua-forum.cl/" 
              alt="Publicidad Skyscraper Derecha" 
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
