import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Carrito.css';

const Carrito = ({ items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.precio * 1, 0);

  const [position, setPosition] = useState({ x: 10, y: 70 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };


  return (
    <div id="carrito" className="carrito" style={{ top: `${position.y}px`, left: `${position.x}px`}}
         onMouseDown={handleMouseDown} onMouseMove={isDragging ? handleMouseMove : null}
         onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
      <div className="carrito__titulo">Carrito de Compra</div>
        {items.length === 0 ? (
          <p className="carrito__items-vacio">El carrito está vacío</p>
        ) : (
          <div>
            <ul className="carrito__items">
              {items.map(item => (
                <li key={item.id} className="carrito__item">
                  <img src={item.imagen} alt={item.titulo} className="carrito__item-imagen"/>                
                  <div className="carrito__item-detalles">
                    <h4 className="carrito__item-titulo">{item.titulo}</h4>
                    <p className="carrito__item-resumen">{item.resumen}</p>
                  </div>
                  <div className="carrito__item-precio">{item.precio} Bs.</div>
                  <div className="carrito__item-cantidad">
                    <input type="number" readOnly='true' value="1" min="1" class="carrito__item-cantidad-input"/>
                  </div>                  
                  <button onClick={() => onRemove(item.id)} className="carrito__boton-eliminar">Eliminar</button>
                </li>
              ))}                 
          </ul>
          <div className="carrito__total">Total: {total.toFixed(2)} Bs.</div>
          <div className="carrito__boton">          
          <Link to={'/checkout'} className="carrito__boton-checkout">Checkout</Link>
          </div>          
        </div>
      )}      
    </div>    
  );
};

export default Carrito;