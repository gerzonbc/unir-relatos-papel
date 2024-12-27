import React from 'react';
import '../styles/ItemCapitulo.css';

const ItemCapitulo = ({ capitulo }) => {
  return (    
    <li className="capitulo">
        <span className="capitulo__numero">{capitulo.numero}</span>
        <span className="capitulo__nombre">{capitulo.titulo}</span>
    </li>      
  );
};

export default ItemCapitulo;