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
                <img src="data:image/jpeg;base64,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" alt="" />
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
                        <li key={index} className="carrito-item">
                            <Link to={`/item/${id}`}>
                                <img src={imagen} alt={producto} className="carrito-imagen" />
                            </Link>
                            <div className="carrito-detalles">
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
                <button className="btn-vaciar" onClick={borrarCarrito}>Vaciar Carrito</button>
                <Link to={`/checkout`} className="btn-comprar">Finalizar Compra</Link>
            </div>
        </div>
    );
}

export default Carrito