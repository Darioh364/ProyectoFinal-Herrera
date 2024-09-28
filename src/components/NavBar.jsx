import CartWidget from './CartWidget'
import {NavLink, Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
      <div className="NavBar p-2">
        <div className="row">
          <div className="col-3 d-flex justify-content-start mt-3">
          <Link to={`/`}> A tu ritmo </Link>
          </div>
          <div className="col-9">
            <div className="d-flex justify-content-end text-center">
              <NavLink to={'/categoria/Teclados'} className={'mx-2 mt-3'}>Teclados</NavLink>
              <NavLink to={'/categoria/Baterias'} className={'mx-2 mt-3'}>Baterias</NavLink>
              <NavLink to={'/categoria/Guitarra'} className={'mx-2 mt-3'}>Guitarras</NavLink>
              <NavLink to={'/categoria/Viento'} className={'mx-2 mt-3'}>Vientos</NavLink>
              <CartWidget />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;