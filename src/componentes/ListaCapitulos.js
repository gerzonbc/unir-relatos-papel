import React from 'react';
import ItemCapitulo from './ItemCapitulo';
import '../styles/ListaCapitulos.css';

const ListaCapitulos = ({ capitulos }) => {
  return (
    <div className="lista-capitulos">
        <h3 className="lista-capitulos__titulo">Contenido del libro</h3>
        <ul className="lista-capitulos__lista">
          {capitulos.map(capitulo => (
            <ItemCapitulo key={capitulo.numero} capitulo={capitulo} />
        ))}
        </ul>
    </div>    
  );
};

export default ListaCapitulos;