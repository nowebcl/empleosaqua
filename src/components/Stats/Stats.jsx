import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

const StatCounter = ({ value, label, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/,/g, ''));
    const duration = 2000;
    let incrementTime = (duration / end) * 2;
    if (incrementTime < 10) incrementTime = 10;
    
    // just a simple simulation for large numbers
    const steps = 50;
    const stepValue = end / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(stepValue * currentStep));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  const displayCount = count.toLocaleString('es-CL');

  return (
    <div className="stat-item glass-panel">
      <div className="stat-value text-gradient">
        {prefix}{displayCount}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container stats-container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="stats-grid"
        >
          <StatCounter value="3000000" label="Visitas al Año" prefix="+" />
          <StatCounter value="500" label="Ofertas Mensuales" prefix="+" />
          <StatCounter value="55000" label="Postulantes" prefix="+" />
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
