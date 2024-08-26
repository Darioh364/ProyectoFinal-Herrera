import CartWidget from './CartWidget'; 

function NavBar() {
  return (
    <>
      <div className="NavBar p-2">
        <div className="row">
          <div className="col-3 d-flex justify-content-start mt-3">
            <h5>Tu ritmo</h5>
          </div>
          <div className="col-9">
            <div className="d-flex justify-content-end text-center">
              <p className="mx-2 mt-3">Teclados</p>
              <p className="mx-2 mt-3">Baterías</p>
              <p className="mx-2 mt-3">Guitarras</p>
              <p className="mx-2 mt-3">Viento</p>
              <CartWidget />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;