import { useContext } from "react"
import { cartContext } from "../context/cartContext"

function Carrito() {

    const { cart } = useContext(cartContext)

    // Comprobar si el carrito no está vacío
    if (cart.length === 0) {
        return <p>El carrito está vacío.</p>;
    }

    return (
        <div className="carrito-container">
            <h2 className="carrito-titulo">Carrito de Compras</h2>
            <ul className="carrito-lista">
                {cart.map((item, index) => {
                        const producto = item.item; // Nombre del producto
                        const cantidad = item.cantidad; // Cantidad del producto
                        const imagen = item.imagen;   // URL de la imagen del producto
                        const precio = item.precio;
                        return (
                            <li key={index} className="carrito-item">
                            <img src={imagen} alt={producto} className="carrito-imagen" />
                            <div className="carrito-detalles">
                                <span className="carrito-producto">{producto}</span>
                                <span className="carrito-cantidad">Cantidad: {cantidad}</span>
                                <span className="carrito-Precio">Precio: {precio}</span>
                            </div>
                        </li>
                        );
                })}
            </ul>
            <div className="carrito-footer">
                <button className="btn-vaciar">Vaciar Carrito</button>
                <button className="btn-comprar">Finalizar Compra</button>
            </div>
        </div>
    );
}

export default Carrito