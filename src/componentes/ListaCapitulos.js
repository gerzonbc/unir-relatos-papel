import React from 'react';
import ItemCapitulo from './ItemCapitulo';
import '../styles/ListaCapitulos.css';

const ListaCapitulos = ({ capitulos }) => {
  return (
    <div className="capitulos">
        <h3 className="capitulos__titulo">Contenido del libro</h3>
        <ul className="capitulos__lista">
          {capitulos.map(capitulo => (
            <ItemCapitulo key={capitulo.numero} capitulo={capitulo} />
        ))}
        </ul>
    </div>    
  );
};

export default ListaCapitulos;