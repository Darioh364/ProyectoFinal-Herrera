
function CheckOut() {
    return (
        <div className="checkout-container">
            <h2>CheckOut</h2>
            <form>
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
    );
}

export default CheckOut;
