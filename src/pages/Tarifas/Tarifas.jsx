import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Tarifas.css';

const Tarifas = () => {
  return (
    <div className="app-container bg-white">
      <Header />
      
      <main className="tarifas-literal">
        <div className="container mx-auto px-4 py-32">
          
          <div className="table-wrapper">
            <table className="literal-table">
              <thead>
                {/* Level 0: PAGADO bar */}
                <tr>
                  <th colSpan="2"></th>
                  <th colSpan="7" className="bg-[#ffcc00] text-white py-2 text-center font-bold tracking-widest uppercase">
                    PAGADO
                  </th>
                </tr>
                {/* Level 1: Plan Headers */}
                <tr className="headers">
                  <th className="plan-label">PLAN</th>
                  <th className="bg-yellow text-white">GRATIS</th>
                  <th className="bg-basico text-white">BÁSICO</th>
                  <th className="bg-premium text-white">PREMIUM</th>
                  <th className="bg-gold text-white">GOLD</th>
                  <th colSpan="4" className="bg-corp text-white">CORPORATIVO</th>
                </tr>
              </thead>
              <tbody>
                {/* Meses */}
                <tr className="bg-gray-100">
                  <td className="font-bold label-cell">Meses</td>
                  <td>1 Mes</td>
                  <td>1 Mes</td>
                  <td>1 Mes</td>
                  <td>1 Mes</td>
                  <td>3 Meses</td>
                  <td>6 Meses</td>
                  <td>9 Meses</td>
                  <td>12 Meses</td>
                </tr>
                {/* Avisos básicos */}
                <tr>
                  <td className="font-bold label-cell">Avisos básicos</td>
                  <td className="font-bold text-blue-muted">1</td>
                  <td className="font-bold text-blue-muted">Ilimitado</td>
                  <td className="font-bold text-blue-muted">Ilimitado</td>
                  <td className="font-bold text-blue-muted">Ilimitado</td>
                  <td colSpan="4" className="font-bold text-blue-muted">Ilimitado</td>
                </tr>
                {/* Avisos destacados - Highlighted in Orange */}
                <tr className="bg-[#f7941d] text-white font-extrabold">
                  <td className="label-cell">Avisos destacados</td>
                  <td>✕</td>
                  <td>2</td>
                  <td>3</td>
                  <td>6</td>
                  <td>10</td>
                  <td>12</td>
                  <td>15</td>
                  <td>30</td>
                </tr>
                {/* Descargar CV */}
                <tr className="bg-gray-100">
                  <td className="font-bold label-cell">Descargar CV</td>
                  <td>1</td>
                  <td>15</td>
                  <td>30</td>
                  <td>45</td>
                  <td colSpan="4">Ilimitado</td>
                </tr>
                {/* Cuentas corporativas */}
                <tr>
                  <td className="font-bold label-cell">Cuentas corporativas</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td colSpan="4">1</td>
                </tr>
                {/* Dashboard de administración */}
                <tr className="bg-gray-100">
                  <td className="font-bold label-cell">Dashboard de administración</td>
                  <td className="font-bold">✕</td>
                  <td className="font-bold">✓</td>
                  <td className="font-bold">✓</td>
                  <td className="font-bold">✓</td>
                  <td colSpan="4" className="font-bold">✓</td>
                </tr>
                {/* Chat con postulantes */}
                <tr>
                  <td className="font-bold label-cell">Chat con postulantes</td>
                  <td className="font-bold">✕</td>
                  <td className="font-bold">✓</td>
                  <td className="font-bold">✓</td>
                  <td className="font-bold">✓</td>
                  <td colSpan="4" className="font-bold">✓</td>
                </tr>
                {/* Reportes */}
                <tr className="bg-gray-100">
                  <td className="font-bold label-cell">Reportes</td>
                  <td className="font-bold">✕</td>
                  <td className="font-bold">✓</td>
                  <td className="font-bold">✓</td>
                  <td className="font-bold">✓</td>
                  <td colSpan="4" className="font-bold">✓</td>
                </tr>
                {/* Ejecutivo Asignado */}
                <tr>
                  <td className="font-bold label-cell">Ejecutivo Asignado</td>
                  <td className="font-bold">✕</td>
                  <td className="font-bold">✓</td>
                  <td className="font-bold">✓</td>
                  <td className="font-bold">✓</td>
                  <td colSpan="4" className="font-bold">✓</td>
                </tr>
                {/* Valor Neto */}
                <tr className="plan-footer font-black">
                  <td className="label-cell">Valor Neto</td>
                  <td className="bg-yellow text-white">Sin Costo</td>
                  <td className="bg-basico text-white">2UF</td>
                  <td className="bg-premium text-white">3UF</td>
                  <td className="bg-gold text-white">5UF</td>
                  <td className="bg-corp text-white">22UF</td>
                  <td className="bg-corp text-white">39UF</td>
                  <td className="bg-corp text-white">49UF</td>
                  <td className="bg-corp text-white">54UF</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tarifas;
