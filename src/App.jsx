import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import QuickActions from './components/QuickActions/QuickActions';
import Stats from './components/Stats/Stats';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';
import ValueBlock from './components/ValueBlock/ValueBlock';
import LaborInfoHub from './components/LaborInfoHub/LaborInfoHub';
import Institutional from './components/Institutional/Institutional';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <QuickActions />
        <Stats />
        <FeaturedJobs />
        <ValueBlock />
        <LaborInfoHub />
        <Institutional />
      </main>
      <Footer />
    </div>
  );
}

export default App;
