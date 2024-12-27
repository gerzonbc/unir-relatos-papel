import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ItemLibro.css';

const ItemLibro = ({ libro }) => {
  return (
    <div className="item-libro">
      <img src={libro.imagen} alt={libro.titulo}/>
      <h2>{libro.titulo}</h2>
      <p className="autor">{libro.autor}</p>
      <p>{libro.resumen}</p>
      <p className="isbn">{libro.isbn}</p>
      <Link to={`/libro/${libro.id}`} className="item-libro__enlace">Ver detalles</Link>
    </div>    
  );
};

export default ItemLibro;