import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const GenericPage = ({ title }) => {
  return (
    <div className="app-container min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full bg-[#f8f9fa] flex items-center justify-center py-20 px-4">
        <div className="glass-panel text-center max-w-2xl w-full py-16 px-8 rounded-xl">
          <h1 className="text-4xl font-bold mb-4 text-black">{title}</h1>
          <p className="text-black text-lg">
            Esta página se encuentra en construcción o fue diseñada como marcador de posición.
          </p>
          <a href="/" className="btn btn-primary mt-8 inline-block">Volver al Inicio</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GenericPage;
