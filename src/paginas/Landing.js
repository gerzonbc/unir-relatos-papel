import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Landing.css';

const Landing = () => {  
  const hookNavegacion = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {      
      hookNavegacion('/principal');      
    }, 5000);

    return () => clearTimeout(timer);
  }, [hookNavegacion]);
  //document.getElementById('carrito').hidden=true;
  return (
    <div className="landing">
        <div className="landing__titulo">Unir- Relatos de Papel</div>
        <img className="landing__imagen" src="logo_UNIR.png" alt="Logo Unir" />
        <div className="landing__mensaje">Cargando la experiencia de compra perfecta...</div>
        <div className="landing__loader"></div>
    </div>
  );
};

export default Landing;