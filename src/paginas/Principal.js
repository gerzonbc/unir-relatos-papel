import React, { useState } from 'react';
import ListaLibros from '../componentes/ListaLibros';
import BarraBusqueda from '../componentes/BarraBusqueda';
import useBuscar from '../hooks/useBuscar';
import '../styles/Principal.css';

const Principal = ({ libros }) => {  
  document.getElementById('carrito').hidden=false;
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const librosFiltrados = useBuscar(libros, textoBusqueda);

  return (
    <div className="principal">      
      <BarraBusqueda onSearch={setTextoBusqueda} />
      <ListaLibros libros={librosFiltrados}/>
    </div>
  );
};

export default Principal;