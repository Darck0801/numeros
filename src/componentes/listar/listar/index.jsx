import { useState, useEffect } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Filtro from '../Filtros';

function Listar({ agregarAFavoritos }) {
  const [data, setData] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Trivia');
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerDatos = async () => {
      let url = 'https://numbersapi.com/';
      if (categoriaSeleccionada === 'Trivia') {
        url += 'random/trivia'; // Trivia aleatoria
      } else if (categoriaSeleccionada === 'Math') {
        url += 'random/math'; // Datos matemáticos aleatorios
      } else if (categoriaSeleccionada === 'Date') {
        url += 'random/date'; // Datos de fecha aleatoria
      } else if (categoriaSeleccionada === 'Year') {
        url += 'random/year'; // Datos de año aleatorio
      }

      const res = await fetch(url);
      const trivia = await res.text();
      setData([trivia]); // Guardamos el resultado como un array de un solo elemento
    };

    obtenerDatos();
  }, [categoriaSeleccionada]);

  const handleCategoriaChange = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  let resultados = data;

  // Búsqueda por número
  if (!isNaN(busqueda)) {
    resultados = data.filter((trivia) =>
      trivia.includes(busqueda)
    );
  }

  return (
    <>
      <input
        type="text"
        placeholder="Buscar Número"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="c-buscador"
      />

      <Filtro onTipoChange={handleCategoriaChange} />
      <section className="c-lista">
        {resultados.map((trivia, index) => (
          <div
            className="c-lista-item"
            onClick={() => navigate(`/Detalle/${index}`)} // Puedes manejar un detalle si lo deseas
            key={index}
          >
            <p>{trivia}</p>
            <button
              onClick={() => agregarAFavoritos({ trivia, id: index })}
            >
              Agregar a Favoritos
            </button>
            <button onClick={() => navigate(`/Detalle/${index}`)}>
              Ver Detalle
            </button>
          </div>
        ))}
      </section>
    </>
  );
}

export default Listar;
