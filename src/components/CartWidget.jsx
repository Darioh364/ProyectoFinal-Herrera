import { useEffect, useContext, useState } from "react";
import { cartContext } from "../context/cartContext";

function CartWidget() {
  const { cart } = useContext(cartContext);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    // Inicializar cantidad en 0
    let totalCantidad = 0;

    // Recorrer el carrito y sumar las cantidades
    cart.forEach(item => {
      if (Array.isArray(item) && item.length > 1) {
        totalCantidad += item[1]; // Sumar la cantidad de cada producto
      }
    });

    // Actualizar el estado con la cantidad total
    setCantidad(totalCantidad);
    console.log(cart)

  }, [cart]); // Se ejecuta cada vez que cambia el carrito


  return (
    <div className="cart_Widget d-flex p-2 justify-content-end text-center">
      <img src="/img/carrito.png" alt="Descripción de la imagen" className="carrito_Img mt-1" />
      <p className="mt-2">{cantidad}</p>
    </div>
  );
}

export default CartWidget;
