import React from 'react';
import { useParams } from 'react-router-dom';
import LibroDetallado from '../componentes/LibroDetallado';
import ListaCapitulos from '../componentes/ListaCapitulos';
import '../styles/DetalleLibro.css';

const DetalleLibro = ({ libros }) => {  
  const { id } = useParams();
  const libroEncontrado = libros.find(libro => libro.id === id);  
  if (!libroEncontrado) {
    return <div>Libro no encontrado</div>;
  }
  return (
    <div className="detalle-libro__contenedor">
      <LibroDetallado libro={libroEncontrado}></LibroDetallado>
      <ListaCapitulos capitulos={libroEncontrado.capitulos}></ListaCapitulos>
    </div>    
  );
};

export default DetalleLibro;