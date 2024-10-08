import { useEffect, useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom"

function CartWidget() {
  const { cart } = useContext(cartContext);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    let totalCantidad = 0;

    // Recorrer el carrito y sumar las cantidades
    cart.forEach(item => {
  
      if (item.cantidad) {
        totalCantidad += item.cantidad; // Sumar la cantidad de cada producto
      }
    });
    // Actualizar el estado con la cantidad total
    setCantidad(totalCantidad);

  }, [cart]); // Se ejecuta cada vez que cambia el carrito


  return (
    <Link to={`/carrito`}>
    <div className="cart_Widget d-flex p-2 justify-content-end text-center">
      <img src="/img/carrito.png" alt="Descripción de la imagen" className="carrito_Img mt-1" />      
      <p className="cantidad">{cantidad}</p>
    </div>
    </Link>
  );
}

export default CartWidget;
