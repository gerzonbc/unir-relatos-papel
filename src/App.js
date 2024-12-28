import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Landing from './paginas/Landing';
import Principal from './paginas/Principal';
import DetalleLibro from './paginas/DetalleLibro';
import Checkout from './paginas/Checkout';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Carrito from './componentes/Carrito';
import {ContextoGlobal} from './componentes/ContextoGlobal';
import useCarrito from './hooks/useCarrito';
import './App.css';

const BDLibros = [
  {
    id: '1',
    titulo: 'To Kill a Mockingbird',
    autor: 'Harper Lee',
    isbn: '978-0-06-112008-4',
    resumen: 'A novel set in the Great Depression, focusing on the Finch family and the moral growth of Scout and Jem as their father, Atticus, defends a black man falsely accused of raping a white woman.',
    precio: '19.90',
    capitulos: [
      {numero: '1', titulo: 'Maycomb'},
      {numero: '2', titulo: 'First Day of School'},
      {numero: '3', titulo: 'The Radley Place'},
      {numero: '4', titulo: 'Gifts in the Tree'},
      {numero: '5', titulo: 'A Dare Gone Wrong'}      
    ],
    comentarios: [
      {id: '1', usuario: 'Juan Perez', valoracion: '4', comentario: 'Excelente libro, es una novela conmovedora que explora la injusticia racial y la pérdida de la inocencia a través de los ojos de Scout Finch, una niña en el sur de los Estados Unidos durante la Gran Depresión.'},
      {id: '2', usuario: 'Benito Juarez', valoracion: '5', comentario: 'Me gusto bastante, es una poderosa historia sobre la lucha contra los prejuicios en una sociedad dividida por el racismo.'},
      {id: '3', usuario: 'Gerzon Barrientos', valoracion: '3', comentario: 'Libro no muy interesante, considero que su ritmo lento y enfoque idealista pueden restar impacto a la complejidad de los temas abordados.'},
      {id: '4', usuario: 'Unir - Universidad en Internet', valoracion: '1', comentario: 'No me gusto para nada,  la perspectiva infantil de Scout simplifica las profundas tensiones sociales de la época.'},
    ],
    imagen: 'https://covers.openlibrary.org/b/id/8225261-L.jpg'
  },
  {
    id: '2',
    titulo: '1984',
    autor: 'George Orwell',
    isbn: '978-0-452-28423-4',
    resumen: 'A dystopian novel exploring themes of totalitarianism, surveillance, and individuality through the experiences of Winston Smith in a tightly controlled society.',
    precio: '16.50',
    capitulos: [
      {numero: '1', titulo: 'The Ministry of Truth'},
      {numero: '2', titulo: 'Big Brother is Watching You'},
      {numero: '3', titulo: 'Thoughtcrime'},
      {numero: '4', titulo: 'Room 101'},
      {numero: '5', titulo: 'The Proles'}      
    ],
    comentarios: [
      {id: '1', usuario: 'Juan Perez', valoracion: '4', comentario: 'Excelente libro, es una novela conmovedora que explora la injusticia racial y la pérdida de la inocencia a través de los ojos de Scout Finch, una niña en el sur de los Estados Unidos durante la Gran Depresión.'},
      {id: '2', usuario: 'Benito Juarez', valoracion: '5', comentario: 'Me gusto bastante, es una poderosa historia sobre la lucha contra los prejuicios en una sociedad dividida por el racismo.'},
      {id: '3', usuario: 'Gerzon Barrientos', valoracion: '3', comentario: 'Libro no muy interesante, considero que su ritmo lento y enfoque idealista pueden restar impacto a la complejidad de los temas abordados.'},
      {id: '4', usuario: 'Unir - Universidad en Internet', valoracion: '1', comentario: 'No me gusto para nada,  la perspectiva infantil de Scout simplifica las profundas tensiones sociales de la época.'},
    ],
    imagen: 'https://covers.openlibrary.org/b/id/7222246-L.jpg'
  },
  {
    id: '3',
    titulo: 'Pride and Prejudice',
    autor: 'Jane Austen',
    isbn: '978-0-19-953556-9',
    resumen: 'A romantic novel that delves into issues of class, family, and societal expectations through the evolving relationship between Elizabeth Bennet and Mr. Darcy.',
    precio: '15.00',
    capitulos: [
      {numero: '1', titulo: 'Meryton'},
      {numero: '2', titulo: 'The Arrival of Mr. Bingley'},
      {numero: '3', titulo: 'The Ball'},
      {numero: '4', titulo: 'First Impressions'},
      {numero: '5', titulo: 'A Misunderstanding'}      
    ],    
    comentarios: [
      {id: '1', usuario: 'Juan Perez', valoracion: '4', comentario: 'Excelente libro, es una novela conmovedora que explora la injusticia racial y la pérdida de la inocencia a través de los ojos de Scout Finch, una niña en el sur de los Estados Unidos durante la Gran Depresión.'},
      {id: '2', usuario: 'Benito Juarez', valoracion: '5', comentario: 'Me gusto bastante, es una poderosa historia sobre la lucha contra los prejuicios en una sociedad dividida por el racismo.'},
      {id: '3', usuario: 'Gerzon Barrientos', valoracion: '3', comentario: 'Libro no muy interesante, considero que su ritmo lento y enfoque idealista pueden restar impacto a la complejidad de los temas abordados.'},
      {id: '4', usuario: 'Unir - Universidad en Internet', valoracion: '1', comentario: 'No me gusto para nada,  la perspectiva infantil de Scout simplifica las profundas tensiones sociales de la época.'},
    ],
    imagen: 'https://covers.openlibrary.org/b/id/8231856-L.jpg'
  },
  {
    id: '4',
    titulo: 'The Great Gatsby',
    autor: 'F. Scott Fitzgerald',
    isbn: '978-0-7432-7356-5',
    resumen: 'A story about the mysterious Jay Gatsby, his unrequited love for Daisy Buchanan, and the critique of the American Dream in the 1920s.',
    precio: '10.20',
    capitulos: [
      {numero: '1', titulo: 'Nick Carraway'},
      {numero: '2', titulo: 'Gatsbys Parties'},
      {numero: '3', titulo: 'Reunion with Daisy'},
      {numero: '4', titulo: 'The Past'},
      {numero: '5', titulo: 'Tragedy'}      
    ],
    comentarios: [
      {id: '1', usuario: 'Juan Perez', valoracion: '4', comentario: 'Excelente libro, es una novela conmovedora que explora la injusticia racial y la pérdida de la inocencia a través de los ojos de Scout Finch, una niña en el sur de los Estados Unidos durante la Gran Depresión.'},
      {id: '2', usuario: 'Benito Juarez', valoracion: '5', comentario: 'Me gusto bastante, es una poderosa historia sobre la lucha contra los prejuicios en una sociedad dividida por el racismo.'},
      {id: '3', usuario: 'Gerzon Barrientos', valoracion: '3', comentario: 'Libro no muy interesante, considero que su ritmo lento y enfoque idealista pueden restar impacto a la complejidad de los temas abordados.'},
      {id: '4', usuario: 'Unir - Universidad en Internet', valoracion: '1', comentario: 'No me gusto para nada,  la perspectiva infantil de Scout simplifica las profundas tensiones sociales de la época.'},
    ],
    imagen: 'https://covers.openlibrary.org/b/id/7222161-L.jpg'
  },
  {
    id: '5',
    titulo: 'Moby Dick',
    autor: 'Herman Melville',
    isbn: '978-0-14-243724-7',
    resumen: 'A thrilling adventure of Captain Ahabs obsessive quest to kill the white whale, Moby Dick, which explores themes of revenge, fate, and the sea.',
    precio: '25.50',
    capitulos: [
      {numero: '1', titulo: 'Ishmael'},
      {numero: '2', titulo: 'The Pequod'},
      {numero: '3', titulo: 'The White Whale'},
      {numero: '4', titulo: 'The Chase'},
      {numero: '5', titulo: 'The Final Battle'}      
    ],
    comentarios: [
      {id: '1', usuario: 'Juan Perez', valoracion: '4', comentario: 'Excelente libro, es una novela conmovedora que explora la injusticia racial y la pérdida de la inocencia a través de los ojos de Scout Finch, una niña en el sur de los Estados Unidos durante la Gran Depresión.'},
      {id: '2', usuario: 'Benito Juarez', valoracion: '5', comentario: 'Me gusto bastante, es una poderosa historia sobre la lucha contra los prejuicios en una sociedad dividida por el racismo.'},
      {id: '3', usuario: 'Gerzon Barrientos', valoracion: '3', comentario: 'Libro no muy interesante, considero que su ritmo lento y enfoque idealista pueden restar impacto a la complejidad de los temas abordados.'},
      {id: '4', usuario: 'Unir - Universidad en Internet', valoracion: '1', comentario: 'No me gusto para nada,  la perspectiva infantil de Scout simplifica las profundas tensiones sociales de la época.'},
    ],
    imagen: 'https://covers.openlibrary.org/b/id/7222247-L.jpg'
  },
  {
    id: '6',
    titulo: 'The Catcher in the Rye',
    autor: 'J.D. Salinger',
    isbn: '978-0-316-76948-0',
    resumen: 'The experiences of Holden Caulfield, a disillusioned teenager navigating the challenges of adolescence in a world he sees as phony.',
    precio: '16.50',
    capitulos: [
      {numero: '1', titulo: 'The Pencey Prep'},
      {numero: '2', titulo: 'Goodbye'},
      {numero: '3', titulo: 'New York'},
      {numero: '4', titulo: 'Phoebe'},
      {numero: '5', titulo: 'The Carousel'}      
    ],
    comentarios: [
      {id: '1', usuario: 'Juan Perez', valoracion: '4', comentario: 'Excelente libro, es una novela conmovedora que explora la injusticia racial y la pérdida de la inocencia a través de los ojos de Scout Finch, una niña en el sur de los Estados Unidos durante la Gran Depresión.'},
      {id: '2', usuario: 'Benito Juarez', valoracion: '5', comentario: 'Me gusto bastante, es una poderosa historia sobre la lucha contra los prejuicios en una sociedad dividida por el racismo.'},
      {id: '3', usuario: 'Gerzon Barrientos', valoracion: '3', comentario: 'Libro no muy interesante, considero que su ritmo lento y enfoque idealista pueden restar impacto a la complejidad de los temas abordados.'},
      {id: '4', usuario: 'Unir - Universidad en Internet', valoracion: '1', comentario: 'No me gusto para nada,  la perspectiva infantil de Scout simplifica las profundas tensiones sociales de la época.'},
    ],
    imagen: 'https://covers.openlibrary.org/b/id/8226191-L.jpg'
  },
  {
    id: '7',
    titulo: 'The Hobbit',
    autor: 'J.R.R. Tolkien',
    isbn: '978-0-618-26030-0',
    resumen: 'The journey of Bilbo Baggins, a hobbit who is thrust into an adventure involving dwarves, a dragon, and a quest for treasure.',
    precio: '8.00',
    capitulos: [
      {numero: '1', titulo: 'An Unexpected Party'},
      {numero: '2', titulo: 'Roast Mutton'},
      {numero: '3', titulo: 'Riddles in the Dark'},
      {numero: '4', titulo: 'Out of the Frying-Pan'},
      {numero: '5', titulo: 'The Lonely Mountain'}      
    ],    
    comentarios: [
      {id: '1', usuario: 'Juan Perez', valoracion: '4', comentario: 'Excelente libro, es una novela conmovedora que explora la injusticia racial y la pérdida de la inocencia a través de los ojos de Scout Finch, una niña en el sur de los Estados Unidos durante la Gran Depresión.'},
      {id: '2', usuario: 'Benito Juarez', valoracion: '5', comentario: 'Me gusto bastante, es una poderosa historia sobre la lucha contra los prejuicios en una sociedad dividida por el racismo.'},
      {id: '3', usuario: 'Gerzon Barrientos', valoracion: '3', comentario: 'Libro no muy interesante, considero que su ritmo lento y enfoque idealista pueden restar impacto a la complejidad de los temas abordados.'},
      {id: '4', usuario: 'Unir - Universidad en Internet', valoracion: '1', comentario: 'No me gusto para nada,  la perspectiva infantil de Scout simplifica las profundas tensiones sociales de la época.'},
    ],
    imagen: 'https://covers.openlibrary.org/b/id/6979861-L.jpg'
  },
  {
    id: '8',
    titulo: 'The Alchemist',
    autor: 'Paulo Coelho',
    isbn: '978-0-06-112241-5',
    resumen: 'A philosophical tale about Santiago, a shepherd boy who dreams of discovering treasure and learns about following his personal legend.',
    precio: '10.30',
    capitulos: [
      {numero: '1', titulo: 'Santiagos Dream'},
      {numero: '2', titulo: 'Meeting Melchizedek'},
      {numero: '3', titulo: 'The Journey'},
      {numero: '4', titulo: 'The Alchemist'},
      {numero: '5', titulo: 'The Treasure'}      
    ],
    comentarios: [
      {id: '1', usuario: 'Juan Perez', valoracion: '4', comentario: 'Excelente libro, es una novela conmovedora que explora la injusticia racial y la pérdida de la inocencia a través de los ojos de Scout Finch, una niña en el sur de los Estados Unidos durante la Gran Depresión.'},
      {id: '2', usuario: 'Benito Juarez', valoracion: '5', comentario: 'Me gusto bastante, es una poderosa historia sobre la lucha contra los prejuicios en una sociedad dividida por el racismo.'},
      {id: '3', usuario: 'Gerzon Barrientos', valoracion: '3', comentario: 'Libro no muy interesante, considero que su ritmo lento y enfoque idealista pueden restar impacto a la complejidad de los temas abordados.'},
      {id: '4', usuario: 'Unir - Universidad en Internet', valoracion: '1', comentario: 'No me gusto para nada,  la perspectiva infantil de Scout simplifica las profundas tensiones sociales de la época.'},
    ],
    imagen: 'https://covers.openlibrary.org/b/id/8107891-L.jpg'
  },
  {
    id: '9',
    titulo: 'The Little Prince',
    autor: 'Antoine de Saint-Exupéry',
    isbn: '978-0-15-601219-5',
    resumen: 'A poetic tale of a young princes travels and the lessons of love, responsibility, and perspective he learns along the way.',
    precio: '30.00',
    capitulos: [
      {numero: '1', titulo: 'The Pilot'},
      {numero: '2', titulo: 'The Prince'},
      {numero: '3', titulo: 'The Rose'},
      {numero: '4', titulo: 'The Planets'},
      {numero: '5', titulo: 'The Fox'}      
    ],
    comentarios: [
      {id: '1', usuario: 'Juan Perez', valoracion: '4', comentario: 'Excelente libro, es una novela conmovedora que explora la injusticia racial y la pérdida de la inocencia a través de los ojos de Scout Finch, una niña en el sur de los Estados Unidos durante la Gran Depresión.'},
      {id: '2', usuario: 'Benito Juarez', valoracion: '5', comentario: 'Me gusto bastante, es una poderosa historia sobre la lucha contra los prejuicios en una sociedad dividida por el racismo.'},
      {id: '3', usuario: 'Gerzon Barrientos', valoracion: '3', comentario: 'Libro no muy interesante, considero que su ritmo lento y enfoque idealista pueden restar impacto a la complejidad de los temas abordados.'},
      {id: '4', usuario: 'Unir - Universidad en Internet', valoracion: '1', comentario: 'No me gusto para nada,  la perspectiva infantil de Scout simplifica las profundas tensiones sociales de la época.'},
    ],
    imagen: 'https://covers.openlibrary.org/b/id/8235116-L.jpg'
  },
  {
    id: '10',
    titulo: 'Brave New World',
    autor: 'Aldous Huxley',
    isbn: '978-0-06-085052-4',
    resumen: 'A dystopian future where society is controlled by technology, drugs, and conditioning, with a focus on the consequences of losing individuality.',
    precio: '4.70',
    capitulos: [
      {numero: '1', titulo: 'The Hatchery'},
      {numero: '2', titulo: 'Soma'},
      {numero: '3', titulo: 'Bernard Marx'},
      {numero: '4', titulo: 'The Savage'},
      {numero: '5', titulo: 'The Ending'}      
    ],
    comentarios: [
      {id: '1', usuario: 'Juan Perez', valoracion: '4', comentario: 'Excelente libro, es una novela conmovedora que explora la injusticia racial y la pérdida de la inocencia a través de los ojos de Scout Finch, una niña en el sur de los Estados Unidos durante la Gran Depresión.'},
      {id: '2', usuario: 'Benito Juarez', valoracion: '5', comentario: 'Me gusto bastante, es una poderosa historia sobre la lucha contra los prejuicios en una sociedad dividida por el racismo.'},
      {id: '3', usuario: 'Gerzon Barrientos', valoracion: '3', comentario: 'Libro no muy interesante, considero que su ritmo lento y enfoque idealista pueden restar impacto a la complejidad de los temas abordados.'},
      {id: '4', usuario: 'Unir - Universidad en Internet', valoracion: '1', comentario: 'No me gusto para nada,  la perspectiva infantil de Scout simplifica las profundas tensiones sociales de la época.'},
    ],
    imagen: 'https://covers.openlibrary.org/b/id/7222248-L.jpg'
  },
  {
    id: '11',
    titulo: 'Crime and Punishment',
    autor: 'Fyodor Dostoevsky',
    isbn: '978-0-14-310763-7',
    resumen: 'The psychological drama of Raskolnikov, who commits a murder and wrestles with guilt, redemption, and morality in 19th-century Russia.',
    precio: '9.90',
    capitulos: [
      {numero: '1', titulo: 'The Crime'},
      {numero: '2', titulo: 'The Investigation'},
      {numero: '3', titulo: 'The Confession'},
      {numero: '4', titulo: 'Redemption'},
      {numero: '5', titulo: 'The Punishment'}      
    ],
    comentarios: [
      {id: '1', usuario: 'Juan Perez', valoracion: '4', comentario: 'Excelente libro, es una novela conmovedora que explora la injusticia racial y la pérdida de la inocencia a través de los ojos de Scout Finch, una niña en el sur de los Estados Unidos durante la Gran Depresión.'},
      {id: '2', usuario: 'Benito Juarez', valoracion: '5', comentario: 'Me gusto bastante, es una poderosa historia sobre la lucha contra los prejuicios en una sociedad dividida por el racismo.'},
      {id: '3', usuario: 'Gerzon Barrientos', valoracion: '3', comentario: 'Libro no muy interesante, considero que su ritmo lento y enfoque idealista pueden restar impacto a la complejidad de los temas abordados.'},
      {id: '4', usuario: 'Unir - Universidad en Internet', valoracion: '1', comentario: 'No me gusto para nada,  la perspectiva infantil de Scout simplifica las profundas tensiones sociales de la época.'},
    ],
    imagen: 'https://covers.openlibrary.org/b/id/8233921-L.jpg'
  },
  {    
    id: '12',
    titulo: 'The Kite Runner',
    autor: 'Khaled Hosseini',
    isbn: '978-1-59448-000-3',
    resumen: 'A moving story of friendship, betrayal, and redemption in Afghanistan, centered on Amir and Hassans lives and choices.',
    precio: '17.40',
    capitulos: [
      {numero: '1', titulo: 'Kabul'},
      {numero: '2', titulo: 'The Tournament'},
      {numero: '3', titulo: 'Betrayal'},
      {numero: '4', titulo: 'Return to Afghanistan'},
      {numero: '5', titulo: 'Redemption'}      
    ],
    comentarios: [
      {id: '1', usuario: 'Juan Perez', valoracion: '4', comentario: 'Excelente libro, es una novela conmovedora que explora la injusticia racial y la pérdida de la inocencia a través de los ojos de Scout Finch, una niña en el sur de los Estados Unidos durante la Gran Depresión.'},
      {id: '2', usuario: 'Benito Juarez', valoracion: '5', comentario: 'Me gusto bastante, es una poderosa historia sobre la lucha contra los prejuicios en una sociedad dividida por el racismo.'},
      {id: '3', usuario: 'Gerzon Barrientos', valoracion: '3', comentario: 'Libro no muy interesante, considero que su ritmo lento y enfoque idealista pueden restar impacto a la complejidad de los temas abordados.'},
      {id: '4', usuario: 'Unir - Universidad en Internet', valoracion: '1', comentario: 'No me gusto para nada,  la perspectiva infantil de Scout simplifica las profundas tensiones sociales de la época.'},
    ],
    imagen: 'https://covers.openlibrary.org/b/id/8234021-L.jpg'
  }
];

const App = () => {   
  const { items, adicionarItemCarrito, eliminarItemCarrito, limpiarCarrito } = useCarrito();
  return (
    <>
    <ContextoGlobal.Provider value={{items, adicionarItemCarrito, eliminarItemCarrito, limpiarCarrito}}>
      <BrowserRouter>
        <Header />
        <Carrito items={items} onRemove={eliminarItemCarrito} />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/principal' element={<Principal libros={BDLibros} />} />        
          <Route path='/libro/:id' element={<DetalleLibro libros={BDLibros} />} />
          <Route path='/checkout' element={<Checkout items={items}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextoGlobal.Provider>
    </>    
  );
};

export default App;
