import { useState } from 'react';

const useCarrito = () => {
  const [items, setItems] = useState([]);

  const adicionarItemCarrito = (item) => {    
    setItems([...items, item]);
  };

  const eliminarItemCarrito = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const limpiarCarrito = () => {
    setItems([]);
  };

  return { items, adicionarItemCarrito, eliminarItemCarrito, limpiarCarrito };
};

export default useCarrito;