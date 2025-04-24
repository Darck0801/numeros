function Filtro({ onCategoriaChange }) {
    const categorias = [
      "Trivia",
      "Math",
      "Date",
      "Year"
    ];
  
    return (
      <div className="c-filtro">
        {categorias.map((categoria, index) => (
          <button
            className=""
            key={index}
            onClick={() => onCategoriaChange(categoria.toLowerCase())} // Convertimos la categoría a minúsculas
          >
            {categoria}
          </button>
        ))}
      </div>
    );
  }
  
  export default Filtro;
  