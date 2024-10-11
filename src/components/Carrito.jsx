import { useContext } from "react"
import { cartContext } from "../context/cartContext"
import { Link } from "react-router-dom"
function Carrito() {

    const { cart, borrarCarrito, eliminarItem } = useContext(cartContext)

    // Comprobar si el carrito no está vacío
    if (cart.length === 0) {
        return (
            <div className="carrito-vacio">
                <h2> El carrito está vacío.</h2>
                <img src="/img/carritoVacio.jpg" alt="" />
            </div>
        )
    }

    return (
        <div className="carrito-container">
            <h2 className="carrito-titulo">Carrito</h2>
            <ul className="carrito-lista">
                {cart.map((item, index) => {
                    const producto = item.item; // Nombre del producto
                    const cantidad = item.cantidad; // Cantidad del producto
                    const imagen = item.imagen;   // URL de la imagen del producto
                    const precio = item.precio;
                    const id = item.id
                    return (
                        <li key={index} className="carrito-item row">
                            <Link to={`/item/${id}`} className="col-12 col-md-4">
                                <img src={imagen} alt={producto} className="carrito-imagen" />
                            </Link>
                            <div className="carrito-detalles col-12 col-md-8">
                                <span className="carrito-producto">{producto}</span>
                                <span className="carrito-cantidad">Cantidad: {cantidad}</span>
                                <span className="carrito-Precio">Precio: {precio}</span>
                            </div>
                            <div>
                                <button onClick={() => eliminarItem(producto)}>Eliminar</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className="carrito-footer">
                <button className="btn-vaciar " onClick={borrarCarrito}>Vaciar Carrito</button>
                <Link to={`/checkout`} className="btn-comprar p-md-3 p-2">Finalizar Compra</Link>
            </div>
        </div>
    );
}

export default Carrito