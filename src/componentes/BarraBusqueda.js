import React from 'react';
import '../styles/BarraBusqueda.css';

const BarraBusqueda = ({ onSearch }) => {
  const handleBusqueda = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="barra-busqueda__contenedor">
      <input
      type="text"      
      placeholder="Buscar libros..."
      onChange={handleBusqueda}/>
      <button>Buscar</button>
    </div>    
  );
};

export default BarraBusqueda;