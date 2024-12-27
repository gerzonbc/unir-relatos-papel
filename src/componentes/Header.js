import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__titulo">Unir - Libreria Relatos de Papel</h1>
      <nav className="header__menu">
        <Link to="/" className="header__enlace" onClick={()=>{document.getElementById('carrito').hidden=true}}>Inicio</Link>
        <Link to="/principal" className="header__enlace" onClick={()=>{document.getElementById('carrito').hidden=false}}>Libros</Link>
        <Link to="/checkout" className="header__enlace">Carrito</Link>
      </nav>
    </header>
  );
};

export default Header;