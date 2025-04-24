import "./style.css";
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="c-menu">
      <Link to="/">Aleatorios</Link> {/* Página principal de números aleatorios */}
      <Link to="/Detalle">Detalle</Link> {/* Página de detalles sobre un número específico */}
      <Link to="/Favoritos">Favoritos</Link> {/* Página que muestra los números favoritos */}
      <Link to="/Listar">Listar</Link> {/* Página para listar diferentes números y filtrarlos */}
      <Link to="/Original">Original</Link> {/* Una página adicional si la deseas */}
      <Link to="/Usuarios">Usuarios</Link> {/* Página de usuarios si la quieres incluir */}
    </nav>
  );
}

export default Menu;
