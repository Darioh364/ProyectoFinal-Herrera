import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
       <div className="container-fluid d-flex justify-content-center">
        <Link className="navbar-brand" to={`/`}>A tu ritmo</Link>
        
        {/* Botón para colapsar el menú en pantallas pequeñas */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links del menú, que colapsan en pantallas pequeñas */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <NavLink to={'/categoria/Teclados'} className="nav-link">Teclados</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/categoria/Baterias'} className="nav-link">Baterías</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/categoria/Guitarra'} className="nav-link">Guitarras</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/categoria/Viento'} className="nav-link">Vientos</NavLink>
            </li>
            {/* Carrito */}
            <li className="nav-item d-flex align-items-center">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
