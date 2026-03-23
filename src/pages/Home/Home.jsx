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
  const PlaceholderBanner = ({ label, height = 'h-64' }) => (
    <div className={`w-full ${height} rounded-lg flex items-center justify-center font-bold text-gray-500 text-center p-4`} 
         style={{ backgroundColor: '#f8fafc', border: '2px dashed #cbd5e1' }}>
      {label}
    </div>
  );

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        
        {/* Publicidad: Banner horizontal */}
        <div className="container mx-auto px-4 mt-8 mb-4">
          <PlaceholderBanner label="Banner Horizontal (Ejemplo)" height="h-32" />
        </div>

        <QuickActions />

        <div className="container mx-auto px-4 mb-16 flex flex-col lg:flex-row gap-8">
          <div className="flex-1" style={{ minWidth: 0 }}>
            {/* The FeaturedJobs will now occupy this left container */}
            <FeaturedJobs />
          </div>

          <aside className="lg:w-[300px] w-full shrink-0 flex flex-col gap-6 pt-16">
            <PlaceholderBanner label="Banner Lateral 1 Superior" />
            <PlaceholderBanner label="Banner Lateral 2 Superior" />
            <PlaceholderBanner label="Banner Lateral 1 Inferior" />
            <PlaceholderBanner label="Banner Lateral 2 Inferior" />
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
