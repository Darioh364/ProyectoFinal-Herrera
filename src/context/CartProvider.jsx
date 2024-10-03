import { useState } from "react"
import { cartContext } from "./cartContext"

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const añadirCarrito = (item) => {
        // Verificar si el carrito está vacío
        if (cart.length === 0) {
            setCart([item]);
        } else {
            // Verificar si el item ya está en el carrito
            const existe = cart.some(cartItem => cartItem.item === item.item);
            
            if (!existe) {
                // Si no existe, añadir el nuevo item al carrito
                setCart([...cart, item]);
            } else {
                // Si ya existe, actualizar la cantidad
                const nuevoCarrito = cart.map(cartItem => {
                    if (cartItem.item === item.item) {
                        // Asegúrate de que cartItem tenga la propiedad 'cantidad'
                        return {
                            ...cartItem,
                            cantidad: cartItem.cantidad + item.cantidad // Sumar la nueva cantidad a la existente
                        };
                    }
                    return cartItem; // Retornar el item sin cambios
                });
                setCart(nuevoCarrito);
            }
        }
    };
    
    
    console.log("Contenido del carrito:", cart);
    
    return (
        <cartContext.Provider value={{ cart, añadirCarrito }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider