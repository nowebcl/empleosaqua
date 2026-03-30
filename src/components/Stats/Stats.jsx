import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Stats.css';

const StatCounter = ({ value, label, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
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
  }, [value, isInView]);

  const displayCount = count.toLocaleString('es-CL');

  return (
    <div ref={ref} className="stat-item glass-panel relative overflow-hidden">
      <div className="stat-value text-gradient font-bold text-4xl mb-2">
        {prefix}{displayCount}{suffix}
      </div>
      <div className="stat-label text-black font-semibold uppercase tracking-wider">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="stats-section mb-16">
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
