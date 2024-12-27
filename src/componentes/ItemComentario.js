import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Comentario.css';

const ComentarioItem = ({ comentario }) => {    
  return (
    <div className="comment-card">
      <div className="comment-author">Jane Smith</div>
      <div className="comment-text">Beautifully written, though some parts were a bit slow for me.</div>
      <div className="comment-rating">⭐⭐⭐⭐☆</div>
    </div>  
  );
};

export default BookItem;