import { useState, useEffect } from 'react';
import './style.css';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  
  useEffect(() => {
    // Función para obtener números aleatorios de la Numbers API para simular los "usuarios"
    const obtenerUsuarios = async () => {
      let usuariosSimulados = [];
      for (let i = 0; i < 5; i++) { // Creamos 5 "usuarios"
        const res = await fetch('https://numbersapi.com/random/trivia');
        const trivia = await res.text();
        usuariosSimulados.push({ id: i + 1, trivia });
      }
      setUsuarios(usuariosSimulados); // Guardamos los "usuarios" simulados
    };

    obtenerUsuarios();
  }, []); // Solo se ejecuta al montar el componente

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <h3>Usuario {usuario.id}</h3>
            <p>{usuario.trivia}</p> {/* Mostrar trivia o dato asociado al "usuario" */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
