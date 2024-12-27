import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {ContextoGlobal} from '../componentes/ContextoGlobal';
import '../styles/Checkout.css';

const Checkout = () => {
  document.getElementById('carrito').hidden=true;
  const {items, limpiarCarrito} = useContext(ContextoGlobal);
  console.log(items);
  const navigate = useNavigate();

  const handlePagar = () => {
    alert('Pedido realizado con éxito');
    limpiarCarrito();
    navigate('/principal');
  };
  const total = items.reduce((sum, item) => sum + item.precio * 1, 0);
  return (
    <div className="checkout">      
      <div className="checkout__items-contenedor">
        <h2>Carrito de Compra</h2>
        <ul className="checkout__items">          
          {items.map(item => (
            <li key={item.id} className="checkout__item">
              <img src={item.imagen} alt={item.titulo} className="checkout__item-imagen"/>                
              <div className="checkout__item-detalles">
                <h4 className="checkout__item-titulo">{item.titulo}</h4>
                <p className="checkout__item-resumen">{item.resumen}</p>
              </div>
              <div className="checkout__item-precio">{item.precio} Bs.</div>
              <div className="checkout__item-cantidad">x 1</div>
            </li>
          ))}                 
        </ul>
      </div>      
      <div className="checkout__resumen-contenedor">
        <h2>Resumen</h2>
        <div className="checkout__resumen-item">
          <p>Subtotal:</p>
          <p>{total.toFixed(2)} Bs.</p>
        </div>
        <div className="checkout__resumen-item">
          <p>Envío:</p>
          <p>0.00 Bs.</p>
        </div>
        <div className="checkout__resumen-total">
          <p>Total:</p>
          <p>{total.toFixed(2)} Bs.</p>
        </div>
        <button onClick={handlePagar} className="checkout__resumen-boton-pagar">Pagar</button>
      </div>      
    </div>      
  );
};

export default Checkout;