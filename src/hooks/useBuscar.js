import { useState, useEffect } from 'react';

const useBuscar = (libros, textoBusqueda) => {
  const [librosFiltrados, setLibrosFiltrados] = useState(libros);

  useEffect(() => {
    setLibrosFiltrados(
      libros.filter(libro =>
        libro.titulo.toLowerCase().includes(textoBusqueda.toLowerCase())
      )
    );
  }, [textoBusqueda, libros]);

  return librosFiltrados;
};

export default useBuscar;