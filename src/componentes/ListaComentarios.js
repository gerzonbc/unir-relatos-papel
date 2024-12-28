import React from 'react';
import ItemComentario from './ItemComentario';
import '../styles/ListaComentarios.css';

const ListaComentarios = ({ comentarios }) => {
  return (
    <>
      <h3 className="comentarios__titulo">Comentarios</h3>
      <div className="comentarios">      
      {comentarios.map(comentario => (
        <ItemComentario key={comentario.id} id={comentario.id} comentario={comentario} />
      ))}
    </div>
    </>    
  );
};

export default ListaComentarios;