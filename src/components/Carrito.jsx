import { useContext } from "react"
import { cartContext } from "../context/cartContext"

function Carrito() {

    const { cart } = useContext(cartContext)

    // Comprobar si el carrito no está vacío
    if (cart.length === 0) {
        return <p>El carrito está vacío.</p>;
    }



    return (
        <div className="carrito">
            <h2>Carrito</h2>
            <ul className="carrito">
                {/* Recorremos el carrito y mostramos los productos */}
                {cart.map((item, index) => {
                    if (Array.isArray(item) && item.length > 1) {
                        const producto = item[0]; // Asumiendo que el nombre o identificador del producto está en la primera posición
                        const cantidad = item[1]; // Asumiendo que la cantidad está en la segunda posición
                        return (
                            <li key={index}>
                                Producto: {producto}, Cantidad: {cantidad}
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
}

export default Carrito