import { useState, useEffect } from 'react';
import './style.css';

function Original() {
  const [dato, setDato] = useState('');

  useEffect(() => {
    // Función para obtener un dato aleatorio desde la Numbers API
    const obtenerDato = async () => {
      try {
        const respuesta = await fetch('https://numbersapi.com/random/trivia');
        const trivia = await respuesta.text();
        setDato(trivia);
      } catch (error) {
        console.error('Error al obtener el dato:', error);
        setDato('No se pudo obtener el dato');
      }
    };

    obtenerDato(); // Llamar a la función cuando el componente se monta
  }, []); // La dependencia vacía [] hace que solo se ejecute una vez al cargar el componente

  return (
    <div>
      <h1>Original</h1>
      <p>{dato}</p> {/* Mostrar el dato obtenido de la Numbers API */}
    </div>
  );
}

export default Original;
