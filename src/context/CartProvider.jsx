import { useState } from "react";
import { cartContext } from "./cartContext";
import Swal from 'sweetalert2';

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const añadirCarrito = (item) => {
        // Lógica actual para añadir productos al carrito
        if (cart.length === 0) {
            setCart([item]);
        } else {
            const existe = cart.some(cartItem => cartItem.item === item.item);
            if (!existe) {
                setCart([...cart, item]);
            } else {
                const nuevoCarrito = cart.map(cartItem => {
                    if (cartItem.item === item.item) {
                        return {
                            ...cartItem,
                            cantidad: cartItem.cantidad + item.cantidad
                        };
                    }
                    return cartItem;
                });
                setCart(nuevoCarrito);
            }
        }
    };

    // Función para vaciar el carrito
    const borrarCarrito = () => {
        setCart([]); // Esto vacía el carrito
        Swal.fire({
            icon: "success",
            title: '¡Se vacio el carrito con exito!',
            showConfirmButton: false,
            timer: 1500
        });
    };

    const eliminarItem = (itemAEliminar) => {
        console.log('Estoy tratando de liminar el item')
        const nuevoCarrito = cart.filter(cartItem => cartItem.item !== itemAEliminar);
        setCart(nuevoCarrito); // Actualiza el carrito con el item eliminado
    }

    return (
        <cartContext.Provider value={{ cart, añadirCarrito, borrarCarrito, eliminarItem }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;
