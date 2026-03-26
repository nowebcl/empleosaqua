import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import QuickActions from '../../components/QuickActions/QuickActions';
import Stats from '../../components/Stats/Stats';
import FeaturedJobs from '../../components/FeaturedJobs/FeaturedJobs';
import Institutional from '../../components/Institutional/Institutional';
import Footer from '../../components/Footer/Footer';
import '../../App.css'; // Global App styles

const Home = () => {
  const AdBanner = ({ src, href, alt }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden transition-opacity hover:opacity-90">
      <img src={src} alt={alt} className="w-full h-auto object-cover rounded-lg" />
    </a>
  );

  return (
    <div className="app-container">
      <Header />
      <main className="w-full relative overflow-x-hidden">
        <Hero />
        
        {/* Layout Principal centrado con Sidebar Ads a los costados exteriores */}
        <div className="w-full max-w-[1550px] mx-auto flex items-start justify-center relative px-2">
          
          {/* Publicidad Lateral Izquierda (Sticky) */}
          <div className="hidden xl:block sticky top-24 w-[160px] 2xl:w-[200px] shrink-0 mr-4 mt-8">
            <AdBanner 
              src="https://tpc.googlesyndication.com/simgad/4141843103343703535" 
              href="https://www.aqua-forum.cl/" 
              alt="AquaForum Los Lagos 29 Abril" 
            />
          </div>

          {/* Contenido Central */}
          <div className="flex-1 w-full max-w-[1200px]">
            {/* Publicidad: Banner horizontal */}
            <div className="w-full px-2 lg:px-4 mt-8 mb-4">
              <AdBanner 
                src="https://tpc.googlesyndication.com/simgad/8863766421333283423" 
                href="https://www.linkedin.com/company/ddconsultingchile/posts/?feedView=all" 
                alt="DD Reclutamiento y Selección" 
              />
            </div>

            <QuickActions />

            <div className="w-full px-2 lg:px-4 mb-16 flex flex-col lg:flex-row gap-8">
              <div className="flex-1" style={{ minWidth: 0 }}>
                {/* The FeaturedJobs will now occupy this left container */}
                <FeaturedJobs />
              </div>


            </div>

            <Institutional />
            <Stats />
          </div>

          {/* Publicidad Lateral Derecha (Sticky) */}
          <div className="hidden xl:block sticky top-24 w-[160px] 2xl:w-[200px] shrink-0 ml-4 mt-8">
            <AdBanner 
              src="https://tpc.googlesyndication.com/simgad/18162141951724842782" 
              href="https://www.aqua-forum.cl/" 
              alt="AquaForum Internacional 05 Nov" 
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
