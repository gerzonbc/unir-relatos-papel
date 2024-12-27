import React, { useContext } from 'react';
import {ContextoGlobal} from './ContextoGlobal';
import '../styles/LibroDetallado.css';

const LibroDetallado = ({ libro }) => {
  const {adicionarItemCarrito} = useContext(ContextoGlobal);
  return (
    <div className="libro-detallado">
      <div className="libro-detallado__portada">
        <img src={libro.imagen} alt={libro.titulo}/>
      </div>
      <div className="libro-detallado__informacion">
        <div className="libro-detallado__titulo">{libro.titulo}</div>
        <div className="libro-detallado__autor">{libro.autor}</div>
        <div className="libro-detallado__valoracion">⭐⭐⭐⭐☆ (4.5/5)</div>
        <div className="libro-detallado__resumen">{libro.resumen}</div>
      </div>
      <div className="libro-detallado__carrito">        
        <div className="libro-detallado__carrito__precio">
          <span className="libro-detallado__carrito__precio__moneda">$</span>{libro.precio}
        </div>
        <div className="libro-detallado__carrito__descuento">30% OFF</div>
          <button className="libro-detallado__carrito__boton-comprar" onClick={() => adicionarItemCarrito(libro)}>Agregar al Carrito</button>          
      </div>
    </div>  
  );
};

export default LibroDetallado;