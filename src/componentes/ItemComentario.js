import React from 'react';
import '../styles/ItemComentario.css';

const ItemComentario = ({ comentario }) => {
  return (
    <div class="comentario">
      <div class="comentario__header">
        <p class="comentario__usuario">{comentario.usuario}</p>
        <div class="comentario__valoracion">
          <span class="comentario__estrella comentarios__estrella--filled">★</span>
          <span class="comentario__estrella comentarios__estrella--filled">★</span>
          <span class="comentario__estrella comentarios__estrella--filled">★</span>
          <span class="comentario__estrella comentarios__estrella--empty">☆</span>
          <span class="comentario__estrella comentarios__estrella--empty">☆</span>
        </div>
      </div>
      <p class="comentario__texto">{comentario.comentario}</p>
      <p class="comentario__fecha">Publicado el 27 de diciembre de 2024</p>
  </div>
  );
};

export default ItemComentario;