import React from 'react';
import ItemLibro from './ItemLibro';
import '../styles/ListaLibros.css';

const ListLibros = ({ libros }) => {
  return (
    <div className="lista-libros">
      {libros.map(libro => (
        <ItemLibro key={libro.id} libro={libro} />
      ))}
    </div>
  );
};

export default ListLibros;