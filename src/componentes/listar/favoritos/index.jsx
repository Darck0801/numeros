import { useState } from 'react';
import './style.css';

function Favoritos({ favoritos }) {
  const [datosFavoritos, setDatosFavoritos] = useState([]);

  const obtenerDatosFavoritos = async () => {
    try {
      // Traemos la información de los números favoritos usando Numbers API
      const datos = await Promise.all(
        favoritos.map(async (numero) => {
          const respuesta = await fetch(`https://numbersapi.com/${numero}/trivia`);
          const trivia = await respuesta.text();
          return { numero, trivia };
        })
      );
      setDatosFavoritos(datos);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  // Llamar a la función para obtener los datos cuando el componente se monta
  useState(() => {
    obtenerDatosFavoritos();
  }, [favoritos]);

  return (
    <div>
      <h1>Favoritos</h1>
      <ul>
        {datosFavoritos.map((item) => (
          <li key={item.numero}>
            <h2>Número: {item.numero}</h2>
            <p>{item.trivia}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favoritos;
