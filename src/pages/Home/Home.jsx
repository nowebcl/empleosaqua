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
      <main className="relative">
        {/* Publicidad Lateral Izquierda - Fija a los costados exteriores */}
        <div className="hidden min-[1600px]:block fixed left-4 top-32 w-[160px] 2xl:w-[200px] z-40">
          <AdBanner 
            src="https://tpc.googlesyndication.com/simgad/4141843103343703535" 
            href="https://www.aqua-forum.cl/" 
            alt="AquaForum Los Lagos 29 Abril" 
          />
        </div>

        {/* Publicidad Lateral Derecha - Fija a los costados exteriores */}
        <div className="hidden min-[1600px]:block fixed right-4 top-32 w-[160px] 2xl:w-[200px] z-40">
          <AdBanner 
            src="https://tpc.googlesyndication.com/simgad/18162141951724842782" 
            href="https://www.aqua-forum.cl/" 
            alt="AquaForum Internacional 05 Nov" 
          />
        </div>

        <Hero />
        
        {/* Publicidad: Banner horizontal */}
        <div className="container mx-auto px-4 mt-8 mb-4">
          <AdBanner 
            src="https://tpc.googlesyndication.com/simgad/8863766421333283423" 
            href="https://www.linkedin.com/company/ddconsultingchile/posts/?feedView=all" 
            alt="DD Reclutamiento y Selección" 
          />
        </div>

        <QuickActions />

        <div className="container mx-auto px-4 mb-16 flex flex-col lg:flex-row gap-8">
          <div className="flex-1" style={{ minWidth: 0 }}>
            {/* The FeaturedJobs will now occupy this left container */}
            <FeaturedJobs />
          </div>

          <aside className="lg:w-[300px] w-full shrink-0 flex flex-col gap-6 pt-16">
            <AdBanner 
              src="https://tpc.googlesyndication.com/simgad/16919953663833581379" 
              href="https://www.facebook.com/Empleosaqua" 
              alt="Empleos Aqua Redes Sociales" 
            />
          </aside>
        </div>

        <Institutional />
        <Stats />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
