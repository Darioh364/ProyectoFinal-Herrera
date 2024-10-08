import { useContext } from "react"
import { cartContext } from "../context/cartContext"
import { Link } from "react-router-dom"

function Carrito() {

    const { cart, borrarCarrito, eliminarItem } = useContext(cartContext)

    // Comprobar si el carrito no está vacío
    if (cart.length === 0) {
        return <p>El carrito está vacío.</p>;
    }

    console.log(cart);

    return (
        <div className="carrito-container">
            <h2 className="carrito-titulo">Carrito de Compras</h2>
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