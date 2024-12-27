import React from 'react';
import BookItem from './BookItem';
import '../styles/ListaComentarios.css';

const ListaComentarios = ({ comentarios }) => {
  return (
    <div className="list-libros">
      {comentarios.map(comentario => (
        <ItemComentario key={comentario.id} id={comentario.id} comentario={comentario} />
      ))}
    </div>
  );
};

export default ListaComentarios;