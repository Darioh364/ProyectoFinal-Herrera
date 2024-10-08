import { useContext } from "react"
import { cartContext } from "../context/cartContext"
import { Link } from "react-router-dom"
import { crearOrden } from "../firebase/db"
import { serverTimestamp } from "firebase/firestore"

function CheckOut() {

    const { cart } = useContext(cartContext)
    let costoTotalCompra = 0

    function handleSubmit(e) {
        e.preventDefault();

        const nombre = e.target.nombre.value
        const email = e.target.email.value
        const direccion = e.target.direccion.value
        const telefono = e.target.telefono.value
        const metodoPago = e.target.metodoPago.value

        const orden = {
            buyer: { nombre, email, direccion, telefono, metodoPago },
            items: cart,
            date: serverTimestamp(),
            total: costoTotalCompra
        }

        crearOrden(orden)
    }




    return (
        <div className="checkout-container row">
            <div className="col-6">
                <div className="carrito-container">
                    <h2 className="carrito-titulo">Resumen de la compra</h2>
                    <ul className="carrito-lista">
                        {cart.map((item, index) => {
                            const producto = item.item; // Nombre del producto
                            const cantidad = item.cantidad; // Cantidad del producto
                            const imagen = item.imagen;   // URL de la imagen del producto
                            const precio = item.precio;
                            const id = item.id

                            const costoDelProducto = cantidad * precio
                            costoTotalCompra = costoTotalCompra + costoDelProducto

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
                                </li>

                            );
                        })}
                    </ul>
                    <h3>Costo final ${costoTotalCompra} </h3>
                </div>
            </div>
            <div className="col-6">
                <h2>Datos para la compra</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre Completo:</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Nombre Completo" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input type="email" id="email" name="email" placeholder="Correo Electrónico" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="direccion">Dirección de Envío:</label>
                        <input type="text" id="direccion" name="direccion" placeholder="Dirección de Envío" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telefono">Teléfono:</label>
                        <input type="tel" id="telefono" name="telefono" placeholder="Teléfono" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="metodoPago">Método de Pago:</label>
                        <select id="metodoPago" name="metodoPago" required>
                            <option value="">Seleccionar Método de Pago</option>
                            <option value="tarjeta">Tarjeta de Crédito</option>
                            <option value="paypal">PayPal</option>
                            <option value="efectivo">Pago en Efectivo</option>
                        </select>
                    </div>

                    <button type="submit">Confirmar Compra</button>
                </form>
            </div>

        </div>
    );
}

export default CheckOut;
