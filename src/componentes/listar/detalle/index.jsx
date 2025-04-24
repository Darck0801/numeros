import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

function Detalle() {
  const { number } = useParams(); // Aquí obtenemos el número desde la URL
  const [data, setData] = useState('');

  useEffect(() => {
    // Usamos la API de Numbers para obtener trivia sobre el número
    fetch(`https://numbersapi.com/${number}/trivia`)
      .then((response) => response.text())
      .then((responseData) => setData(responseData))
      .catch((error) => console.error('Error:', error));
  }, [number]); // Dependemos del número para que se actualice cada vez que cambie

  if (!data) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Dato Curioso del Número {number}</h1>
      <p>{data}</p>
    </div>
  );
}

export default Detalle;
